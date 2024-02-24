import React, { useRef } from 'react'
import { motion } from 'framer-motion';

export default function Framer1() {
    const constraintsRef = useRef(null);
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    }

    return (
        <div className=''>
            <motion.div className='bg-danger m-5' style={{ height: '100px', width: '100px' }}
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}
            ></motion.div>

            <motion.div className='bg-success m-5' style={{ height: '100px', width: '100px' }}
                whileHover={{ scale: 1.2, rotate: 90 }}
            ></motion.div>

            <motion.div ref={constraintsRef}>
                <motion.div
                    className='bg-warning m-5' style={{ height: '100px', width: '100px' }}
                    drag
                    dragConstraints={constraintsRef}
                ></motion.div>
            </motion.div>

            <div className="" style={{ height: '100px', width: '100px' }}>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="item"
                >
                    <motion.path
                        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                        variants={icon}
                        // initial="hidden"
                        // animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                </motion.svg>
            </div>
        </div >
    )
}
