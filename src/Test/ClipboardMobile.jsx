import React, { useState } from 'react';

export default function ClipboardMobile() {
    const [clip, setClip] = useState('clip-content');
    const [errors, setErrors] = useState('')

    function pasteClip() {
        try {
            navigator.clipboard.readText()
                .then(clipboardData => {
                    setClip(clipboardData);
                })
                .catch(error => {
                    console.error('Failed to read clipboard data: ', error);
                    setErrors(error.message);
                });
        } catch (error) {
            setClip(error.message);
        }
    }

    return (
        <div>
            <div>{clip}</div>
            <div>{errors}</div>
            <button onClick={pasteClip}>paster</button>
        </div>
    );
}
