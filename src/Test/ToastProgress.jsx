import React, { useEffect, useState } from 'react'

let id = 1;
export default function ToastProgress() {
    const [toasts, setToasts] = useState([]);

    function showToast() {
        id++;
        setToasts((prev) => [...prev, { title: `toast id - ${id}`, id }])
    }

    function removeToast(id) {
        setToasts((prev) => [...prev.filter((toast) => toast.id !== id)]);
    }

    return (
        <div>
            <button onClick={showToast}>show toast</button>
            <div>
                {toasts.map((toast, i) => <div key={i}><ToastCard {...{ toast, removeToast }} /></div>)}
            </div>
        </div>
    )
}


function ToastCard(props) {
    const [width, setWidth] = useState(100);
    const timeoutTime = 5000;
    const intervalTime = 50;

    useEffect(() => {
        const timeout = setTimeout(() => {
            props.removeToast(props.toast.id)
        }, timeoutTime);

        const interval = setInterval(() => {
            setWidth((prev) => prev - 100 / (timeoutTime / intervalTime));
        }, intervalTime);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        }
    }, [])


    return (
        <div>
            <div>
                {props.toast.title}
            </div>
            <div style={{ width: `${width}%`, height: '10px', backgroundColor: 'red' }}></div>
        </div>
    );
}