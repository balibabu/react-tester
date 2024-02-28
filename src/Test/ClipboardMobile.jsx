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

    return (
        <div>
            <div>{clip}</div>
            <div>{errors}</div>
            {!compatible && <input onChange={(e) => setClip(e.target.value)} />}
            <button onClick={pasteClip}>paster</button>
        </div>
    );
}
