import { FFmpeg } from "@ffmpeg/ffmpeg";
import { saveAs } from 'file-saver';

export default async function Compresssor(video, setBusy) {
    setBusy(true);
    const ffmpeg = new FFmpeg();
    console.log(video);
    await ffmpeg.load();
    // await ffmpeg.writeFile('input.webm', chunk);

    const reader = new FileReader();
    reader.readAsArrayBuffer(video);
    await new Promise((resolve) => {
        reader.onload = () => {
            resolve();
        };
    });
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
