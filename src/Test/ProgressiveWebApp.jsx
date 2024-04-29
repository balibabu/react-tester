import React, { useState } from 'react'

let num = 0;
const savedValues = localStorage.getItem('ProgressiveWebApp');
export default function ProgressiveWebApp() {
    const [values, setValues] = useState(savedValues ? savedValues.split(',') : []);

    function addValue() {
        setValues((prev) => {
            const newValues = [...values, num++];
            localStorage.setItem('ProgressiveWebApp', newValues.toLocaleString());
            return newValues
        });
    }
    
    return (
        <div>
            <button onClick={addValue}>Add Number</button>
            {values.map((value) => <div key={value}>{value}</div>)}
        </div>
    )
}
