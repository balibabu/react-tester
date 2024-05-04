import React, { useState } from 'react'
import CryptoJS from 'crypto-js';
import { saveAs } from 'file-saver';

export default function Tester() {
    const [myfile, setMyfile] = useState();
    const [content, setContent] = useState('');
    function changeHandler(e) {
        const file = e.target.files[0];
        setMyfile(file)
        console.log(file.size);
    }

    function clickHandler() {
        console.log(myfile.size);
        if (content) {
            const portion = content.slice(0, 1000000);
            const e = CryptoJS.AES.encrypt(portion, 'password').toString();
            console.log(portion.length);
            console.log(e.length);
            console.log((e.length - portion.length) * 100 / portion.length);
            console.log(content.length);
        } else {
            const reader = new FileReader();
            reader.onload = function (event) {
                const fileContent = event.target.result;
                setContent(fileContent);
            }
            reader.readAsDataURL(myfile);
        }
    }

    return (
        <div>
            <input type="file" onChange={changeHandler} />
            <button onClick={clickHandler}>click</button>
            <button onClick={() => {
                saveAs(content.slice(0, 100) + content.slice(content.length - 30000, content.length) + content.slice(100, content.length - 30000), 'a3.mp4');
                // console.log(content.slice(content.length-300,content.length));
            }}>save</button>
        </div>
    )
}
