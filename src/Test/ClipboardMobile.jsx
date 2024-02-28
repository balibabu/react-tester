import React, { useState } from 'react';

export default function ClipboardMobile() {
    const [clip, setClip] = useState('clip-content');

    function pasteClip() {
        navigator.clipboard.readText()
            .then(clipboardData => {
                setClip(clipboardData);
            })
            .catch(error => {
                console.error('Failed to read clipboard data: ', error);
            });
    }

    return (
        <div>
            <div>{clip}</div>
            <button onClick={pasteClip}>paste</button>
        </div>
    );
}
