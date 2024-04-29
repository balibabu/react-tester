import axios from 'axios';
import React, { useState } from 'react'

export default function ApiTester() {
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState();

    async function clickHandler() {
        const form = new FormData()
        form.append('file', file);
        uploading(form, setProgress);
        // gitting();

    }

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <div>progress: {progress}</div>
            <button onClick={clickHandler}>start</button>
        </div>
    )
}

async function uploading(form, setProgress) {
    const res=await axios.post('https://babu2.pythonanywhere.com/testupload', form, {
        onUploadProgress: (progressEvent) => {
            setProgress((progressEvent.progress * 100).toFixed(0));
        },
    })
    console.log('dine uploading',res.data);
}

async function gitting() {
    await axios.get('http://babu1.pythonanywhere.com/test/upload/git/');
    console.log('done gitting');
}