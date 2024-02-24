import React from 'react'
import { motion } from 'framer-motion';

export default function Gesture() {
    return (
        <div className='m-5'>
            <div>Gesture : hover, tap, drag, focus and inView</div>

            <Hover />
            <Tap />

        </div>
    )
}

function Hover() {
    return (
        <motion.div
            initial={{ opacity: 0.6 }}
            whileHover={{
                scale: 1.2,
                transition: { duration: .5 },
            }}
            whileTap={{ scale: 0.9 }}


            style={{ width: '100px', height: '100px', backgroundColor: 'grey' }}>
            hover
        </motion.div>
    )
}

function Tap() {
    return (
        <motion.div
            whileTap={{ scale: 0.9 }}

            style={{ width: '100px', height: '100px', backgroundColor: 'grey' }}>
            hover
        </motion.div>
    )
}