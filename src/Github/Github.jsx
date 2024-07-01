import React, { useState } from 'react'
import { token } from './Token';

export default function Github() {
    const [imgUrl, setImgUrl] = useState('');

    return (
        <div>
            <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
            <img src={imgUrl} alt="without ghp" />
            <img src={imgUrl.slice(4)} alt="with ghp" />
            <button onClick={createFile}>Create file</button>
            <button onClick={getFile}>read file</button>
            <button onClick={deleteFile}>delete file</button>
            <button onClick={getFileSha}>getFileSha</button>
        </div>
    )
}

const createFile = async () => {
    const response = await fetch('https://api.github.com/repos/storeage/media/contents/file.txt', {
        method: 'PUT',
        headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Creating a new file',
            content: btoa('This is the file content'), // Base64 encoded content
            branch: 'main'
        })
    });
    const data = await response.json();
    console.log(data);
};

const getFile = async () => {
    const response = await fetch('https://api.github.com/repos/storeage/media/contents/file.txt', {
        headers: {
            'Authorization': `token ${token}`,
        }
    });
    const data = await response.json();
    console.log(atob(data.content)); // Decode the Base64 content
};

const deleteFile = async () => {
    const sha = await getFileSha();
    const response = await fetch('https://api.github.com/repos/storeage/media/contents/file.txt', {
        method: 'DELETE',
        headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Deleting the file',
            sha: sha, // The current file's SHA
            branch: 'main'
        })
    });
    const data = await response.json();
    console.log(data);
};

const getFileSha = async () => {
    const url = `https://api.github.com/repos/storeage/media/contents/file.txt`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });

    if (!response.ok) {
        console.error(`Failed to get file SHA: ${response.statusText}`);
        return;
    }

    const data = await response.json();
    console.log(data);
    return data.sha;
};
