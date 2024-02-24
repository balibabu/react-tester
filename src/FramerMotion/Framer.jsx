import React from 'react'
import SVG1 from './SVG1'
import Animate from './units/Animate'
import KeyFrames from './units/KeyFrames'
import Gesture from './units/Gesture'
import Hi from './SVG/Hi'

export default function Framer() {
    return (
        <div>
            <Animate />
            <SVG1 />
            <KeyFrames />
            <Gesture />
            <div style={{width:'300px'}}>
                <Hi />
            </div>
        </div>
    )
}
