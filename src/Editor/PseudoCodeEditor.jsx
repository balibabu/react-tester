import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'

export default function PseudoCodeEditor(props) {
    const [value, setValue] = useState('');

    function saveHandler() {
        console.log(value);
    }

    return (
        <div>
            <div className='bg-black'>
                <button className='btn btn-primary' onClick={saveHandler}>save</button>
            </div>
            <Editor
                theme='vs-dark'
                height="90dvh"
                defaultLanguage="python"
                defaultValue="# write your code here"
                value={value}
                onChange={(value) => setValue(value)}
            />
        </div>
    )
}
