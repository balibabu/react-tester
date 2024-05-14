import React, { useState } from 'react'
import AllFaces from './AllFaces';
import { rotate } from './controller';

export default function Rubiz() {
    const [grids, setGrids] = useState([
        [['r1', 'r2', 'r3'], ['r4', 'r5', 'r6'], ['r7', 'r8', 'r9']],
        [['o1', 'o2', 'o3'], ['o4', 'o5', 'o6'], ['o7', 'o8', 'o9']],
        [['b1', 'b2', 'b3'], ['b4', 'b5', 'b6'], ['b7', 'b8', 'b9']],
        [['g1', 'g2', 'g3'], ['g4', 'g5', 'g6'], ['g7', 'g8', 'g9']],
        [['w1', 'w2', 'w3'], ['w4', 'w5', 'w6'], ['w7', 'w8', 'w9']],
        [['y1', 'y2', 'y3'], ['y4', 'y5', 'y6'], ['y7', 'y8', 'y9']]
    ]);

    return (
        <div>
            <AllFaces {...{ grids }} />
            <div>
                <div className='d-flex'>
                    <div style={styleSize}></div>
                    <button style={styleSize} onClick={() => rotate(grids, setGrids, ['col', 0], true)}>↑</button>
                    <button style={styleSize} onClick={() => rotate(grids, setGrids, ['col', 1], true)}>↑</button>
                    <button style={styleSize} onClick={() => rotate(grids, setGrids, ['col', 2], true)}>↑</button>
                </div>
                <div className='d-flex'>
                    <div>
                        <button style={styleSize} onClick={() => rotate(grids, setGrids, ['row', 0], true)}>{'<-'}</button><br />
                        <button style={styleSize} onClick={() => rotate(grids, setGrids, ['row', 1], true)}>{'<-'}</button><br />
                        <button style={styleSize} onClick={() => rotate(grids, setGrids, ['row', 2], true)}>{'<-'}</button><br />
                    </div>
                    <div style={{ width: '120px', alignContent:'center', textAlign:'center' }}>Controls</div>
                    <div>
                        <button style={styleSize} onClick={() => rotate(grids, setGrids, ['row', 0], false)}>{'->'}</button><br />
                        <button style={styleSize} onClick={() => rotate(grids, setGrids, ['row', 1], false)}>{'->'}</button><br />
                        <button style={styleSize} onClick={() => rotate(grids, setGrids, ['row', 2], false)}>{'->'}</button><br />
                    </div>
                </div>
                <div className='d-flex'>
                    <div style={styleSize}></div>
                    <button style={styleSize} onClick={() => rotate(grids, setGrids, ['col', 0], false)}>↓</button>
                    <button style={styleSize} onClick={() => rotate(grids, setGrids, ['col', 1], false)}>↓</button>
                    <button style={styleSize} onClick={() => rotate(grids, setGrids, ['col', 2], false)}>↓</button>
                </div>
            </div>
        </div>
    )
}

const styleSize = {
    width: '40px',
    height: '40px'
}

// <div>
// <div>clockwise</div>
// <button onClick={() => rotate(grids, setGrids, ['col', 0], true)}>col1</button>
// <button onClick={() => rotate(grids, setGrids, ['col', 1], true)}>col1</button>
// <button onClick={() => rotate(grids, setGrids, ['col', 2], true)}>col1</button>
// </div>
// <div>
// <div>anti-clockwise</div>
// <button onClick={() => rotate(grids, setGrids, ['col', 0], false)}>col1</button>
// <button onClick={() => rotate(grids, setGrids, ['col', 1], false)}>col1</button>
// <button onClick={() => rotate(grids, setGrids, ['col', 2], false)}>col1</button>
// </div><br />

// <div>
// <div>clockwise</div>
// <button onClick={() => rotate(grids, setGrids, ['row', 0], true)}>row1</button>
// <button onClick={() => rotate(grids, setGrids, ['row', 1], true)}>row2</button>
// <button onClick={() => rotate(grids, setGrids, ['row', 2], true)}>row3</button>
// </div>
// <div>
// <div>anticlockwise</div>
// <button onClick={() => rotate(grids, setGrids, ['row', 0], false)}>row1</button>
// <button onClick={() => rotate(grids, setGrids, ['row', 1], false)}>row2</button>
// <button onClick={() => rotate(grids, setGrids, ['row', 2], false)}>row3</button>
// </div>