import React from 'react'

export default function View({ grid }) {
    return (
        <div className='p-1'>
            {grid.map((row, i) => (
                <div className='d-flex' key={i}>
                    {row.map((col, j) => (
                        <div key={j} style={{ backgroundColor: color[col[0]], height: '50px', width: '50px', margin: '1px' }}></div>
                    ))}
                </div>
            ))}
        </div>
    )
}


const color = {
    r: 'red',
    g: 'green',
    b: 'blue',
    y: 'yellow',
    o: 'orange',
    w: 'grey'
}