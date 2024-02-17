import axios from 'axios';
import React, { useState } from 'react'


export default function Storage() {
    const [id, setId] = useState('');
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        const form = new FormData()
        form.append('file', file);
        form.append('id', id)
        const res = await axios.post('https://storeage.pythonanywhere.com/upload/', form);
        console.log(res);
    }
    async function get() {
        const res = await axios.get('https://storeage.pythonanywhere.com/request/an/id/');
        setId(res.data.id);
    }
    async function getFilesInfo() {
        const res = await axios.get(`https://storeage.pythonanywhere.com/files/info/${id}/`);
        console.log(res.data);
    }

    async function download() {
        const res = await axios.get(`https://storeage.pythonanywhere.com/download/${id}/${0}/`);
        console.log(res.data);
    }

    async function deleteFile() {
        const res = await axios.get(`https://storeage.pythonanywhere.com/delete/${id}/${0}/`);
        console.log(res.data);
    }
    

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <button onClick={get}>get</button><br />
            <button onClick={getFilesInfo}>getFilesInfo</button><br />
            <button onClick={download}>download</button><br />
            <button onClick={deleteFile}>delete</button><br />
            <div>{id}</div>
        </div>
    )
}
