import React from 'react'
import Compressor from 'compressorjs';
import { saveAs } from 'file-saver';
import imageCompression from "browser-image-compression";

export default function CompressorTesting() {
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        const fi = await fun1(file);
    }

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />

        </div>
    )
}

async function fun1(file) {
    const res = new Compressor(file, {
        // quality: 0.7
        strict: false,
        retainExif: true,
        maxWidth: 4000, // Set the maximum width of the compressed image
        maxHeight: 4000,

        // The compression process is asynchronous,
        // which means you have to access the `result` in the `success` hook function.
        success(result) {
            console.log(result.size);
            console.log(file.size);
        },
        error(err) {
            console.log(err.message);
        },
    });

    return res;
}



const compressImage = async (file) => {
    // const imageDimensions = await imageSize(file);
    // console.log({ imageDimensions, size: niceBytes(file.size) });

    const options = {
        // maxSizeMB: 1,
        maxWidthOrHeight: 4000,
        // imageDimensions?.width > 1300 ? 1300 : imageDimensions?.width,
        useWebWorker: true,
    };

    const compressedImg = await imageCompression(file, options);
    console.log(compressedImg);
    saveAs(compressedImg, 'browser.jpg');
    // return compressedImg;
};
