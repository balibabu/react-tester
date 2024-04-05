import React, { useState } from 'react'
import Operation from './Operation';

export default function VideoProcessor() {
    const [file, setFile] = useState();
    const [command, setCommand] = useState('-vf mpdecimate,setpts=N/FRAME_RATE/TB -map 0:v');
    const [progress, setProgress] = useState(0);
    const [output, setOutput] = useState('output.mp4');

    async function onSubmit() {
        setProgress(0.1);
        const cmd = '-i input.mp4 ' + command + ' ' + output;
        Operation(file, setProgress, cmd, output);
        setFile();
    }

    return (
        <div className='container mt-3'>
            <div className='form-label fs-2'>FFmpeg Video Processor</div>
            <small className=''>{`ffmpeg -i input.mp4 ${command} `}</small><input type="text" style={{ background: 'transparent', outline: 'none', width: `${1 + output.length}ch` }} value={output} onChange={(e) => setOutput(e.target.value)} />
            {
                progress === 0 ?
                    <>
                        <textarea value={command} onChange={(e) => setCommand(e.target.value)} className='form-control mt-1'></textarea>
                        {/* <input type="text" value={command} onChange={(e) => setCommand(e.target.value)} className='form-control' placeholder='eg: ' /> */}
                        <input type="file" accept="video/*" onChange={(e) => setFile(e.target.files[0])} className='form-control fs-5 my-2' style={{ whiteSpace: 'pre-wrap' }} />
                        <button onClick={onSubmit} className='btn btn-primary col-12' >proceed</button>
                    </>
                    :
                    <>
                        <div>Working</div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-info" style={{ width: `${progress}%` }}>{progress}%</div>
                        </div>
                    </>
            }
        </div>
    )
}
