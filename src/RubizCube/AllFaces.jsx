import React from 'react'
import View from './View'

export default function AllFaces({ grids }) {
    return (
        <div>
            <div className='d-flex'>
                <div style={{width:'165px'}}></div>
                <View {...{ grid: grids[2] }} />
            </div>
            <div className='d-flex'>
                <div><View {...{ grid: grids[4] }} /></div>
                <div><View {...{ grid: grids[0] }} /></div>
                <div><View {...{ grid: grids[5] }} /></div>
                <div><View {...{ grid: grids[1] }} /></div>
            </div>
            <div className='d-flex'>
                <div style={{width:'165px'}}></div>
                <View {...{ grid: grids[3] }} />
            </div>
        </div>
    )
}
