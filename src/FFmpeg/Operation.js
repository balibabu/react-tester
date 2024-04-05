import { FFmpeg } from "@ffmpeg/ffmpeg";
import { saveAs } from "file-saver";

export default async function Operation(video, setProgress, command, filename) {

    const reader = new FileReader();
    reader.readAsArrayBuffer(video);
    await new Promise((resolve) => {
        reader.onload = () => {
            resolve();
        };
    });

    const ffmpeg = new FFmpeg();
    ffmpeg.on('progress', ({ progress }) => { setProgress((progress * 100 * 2).toFixed(1)) });
    await ffmpeg.load();
    const uint8ArrayChunk = new Uint8Array(reader.result);
    await ffmpeg.writeFile('input.mp4', uint8ArrayChunk);

    await ffmpeg.exec(command.split(' '));
    setProgress(0);

    const data = await ffmpeg.readFile('output.mp4');
    const blob = new Blob([data.buffer], { type: 'video/mp4' });
    console.log(blob);
    saveAs(blob, filename);
}
