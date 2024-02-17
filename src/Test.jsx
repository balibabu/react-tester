import React, { useEffect, useRef, useState } from 'react'
import CustomIOB from './Test/CustomIOB';

export default function Test() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [, setInitialFetch] = useState(false);

    useEffect(() => {
        if(visible){
            setInitialFetch((prev)=>{
                if(!prev){
                    console.log('fetching');
                }
                return true;
            })
        }
    }, [visible])

    return (
        <div>
            <div>{visible ? 'Your component is visible' : 'nah not fully visible'}</div>
            <div style={{ height: '200px', backgroundColor: 'red' }} ref={sectionRef}>bali</div>
            <CustomIOB {...{ sectionRef, setVisible }} />
        </div>
    )
}
