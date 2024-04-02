import { FFmpeg } from "@ffmpeg/ffmpeg";
import { saveAs } from 'file-saver';

export default async function Compresssor(video, setBusy, setProgress) {
    setBusy(true);
    const reader = new FileReader();
    reader.readAsArrayBuffer(video);
    await new Promise((resolve) => {
        reader.onload = () => {
            resolve();
        };
    });

    const ffmpeg = new FFmpeg();
    ffmpeg.on('progress', ({ progress }) => { setProgress((progress * 100).toFixed(1)) });
    await ffmpeg.load();
    const uint8ArrayChunk = new Uint8Array(reader.result);
    await ffmpeg.writeFile('input.mp4', uint8ArrayChunk);

    await ffmpeg.exec([
        '-i', 'input.mp4',
        '-vf', 'mpdecimate,setpts=N/FRAME_RATE/TB',
        '-map', '0:v',
        'output.mp4'
    ]);

    const data = await ffmpeg.readFile('output.mp4');
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    console.log(blob);
    saveAs(blob, 'processed.mp4');
    setBusy(false);
}
