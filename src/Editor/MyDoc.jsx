import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react'
import ThemeToggler from './ThemeToggler';

export default function MyDoc() {
    const [content, setContent] = useState('bali babu');
    const [theme, setTheme] = useState(localStorage.getItem('editor-theme') || 'light');
    const editor = useRef(null);

    return (
        <div style={{ height: '100dvh' }}>
            <div style={{ height: '5dvh', backgroundColor: theme === 'light' ? '' : 'grey' }} className='p-1 d-flex justify-content-between'>
                <div>
                    <button>save</button>
                    <button>cancel</button>
                </div>
                <button>upload</button>
                <input id='title' type="text" placeholder='title' className={theme === 'light' ? '' : 'bg-secondary'} />
                <ThemeToggler {...{ theme, setTheme }} />
            </div>
            <JoditEditor
                ref={editor}
                value={content}
                config={{ height: '95dvh', theme }}
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => setContent(newContent)}
            />
        </div>
    )
}


// https://raw.githubusercontent.com/storeage/images/main/1.jpg