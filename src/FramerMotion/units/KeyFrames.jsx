import React from 'react'
import { motion } from 'framer-motion';

export default function KeyFrames() {
    return (
        <div>
            <motion.div
                animate={{ x: [-100,0,100,0], opacity: [0,1,0,1], scale:[10,0,10,1] }}
                transition={{ ease: "easeOut", duration: 5 }}

                style={{ width: '100px' }}
            >Animate</motion.div>
        </div>
    )
}
