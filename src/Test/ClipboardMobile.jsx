import React, { useState } from 'react';

export default function ClipboardMobile() {
    const [clip, setClip] = useState('clip-content');
    const [errors, setErrors] = useState('')
    const [compatible, setCompatible] = useState(true);

    function pasteClip() {
        navigator.clipboard.readText()
            .then(clipboardData => {
                setClip(clipboardData);
            })
            .catch(error => {
                console.error('Failed to read clipboard data: ', error);
                setErrors(error.message);
                setCompatible(false)
            });
    }

    function permit() {
        navigator.permissions.query({ name: 'clipboard-read' }).then((result) => {
            if (result.state === 'granted') {
                setClip('Clipboard access granted.');
            } else if (result.state === 'prompt') {
                setClip('Clipboard access prompt.');
            } else {
                setClip('Clipboard access denied.');
            }
        }).catch((error) => {
            console.error('Error querying clipboard permissions:', error);
            setClip('Error querying clipboard permissions.');
        });
    }
    

    return (
        <div>
            <div>{clip}</div>
            <div>{errors}</div>
            {!compatible && <input onChange={(e) => setClip(e.target.value)} />}
            <button onClick={pasteClip}>paster</button>
            <button onClick={permit}>paster</button>
        </div>
    );
}
