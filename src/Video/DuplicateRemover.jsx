import React, { useState } from 'react'
import Compresssor from './Compressor';

export default function DuplicateRemover() {
    const [file, setFile] = useState();
    const [busy, setBusy] = useState(false);

    function onClickHandler() {
        if (file) {
            Compresssor(file, setBusy);
        }
        setFile(null);
    }

    return (
        <div>
            {busy ?
                <div>Please wait, your video is being processed</div>
                :
                <div>
                    <div>DuplicateFrameRemover</div>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <button onClick={onClickHandler}>compress</button>
                </div>
            }
        </div>
    )
}
