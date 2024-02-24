import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

export default function Animate() {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 100, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}

                style={{ width: '100px' }}
            >Animate</motion.div>


            <AnimatePresence>
                {visible &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}

                        onClick={() => setVisible(false)}
                        style={{ width: '100px' }}
                    >Animate</motion.div>
                }
            </AnimatePresence>
        </div>
    )
}
