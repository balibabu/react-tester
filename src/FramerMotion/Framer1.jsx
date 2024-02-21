import React from 'react'
import { motion } from 'framer-motion';

export default function Framer1() {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <motion.div className='bg-danger' style={{ height: '100px', width: '100px' }}
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            ></motion.div>
        </div>
    )
}
