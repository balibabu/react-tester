import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react'

export default function MyDoc() {
    const [content, setContent] = useState('');
    const editor = useRef(null);
    return (
        <div style={{height:'100dvh', color:'black'}}>
            <JoditEditor
                ref={editor}
                value={content}
                config={{height:'100dvh'}}
                // tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => setContent(content)}
            />
        </div>
    )
}
