import React, { useState } from 'react'

export default function PasteImageFromClip() {
    const [image, setImage] = useState(null);

    const handlePaste = (event) => {
        const items = event.clipboardData.items;
        for (let item of items) {
            if (item.type.startsWith('image/')) {
                const blob = item.getAsFile();
                console.log(blob);

                const url = URL.createObjectURL(blob);
                setImage(url);
            }
        }
    };

    return (
        <div style={{height:'100dvh', padding: '10px'}}>
            <div onPaste={handlePaste} style={{ border: '1px solid black', padding: '10px', height:'100%' }}>
                {image ? <img style={{width:'100%', maxHeight:'100%'}} src={image} alt="Pasted" /> : 'Paste an image here'}
            </div>
        </div>
    );
}
