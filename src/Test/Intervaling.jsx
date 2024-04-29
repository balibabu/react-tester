import React, { useEffect, useState } from 'react'

export default function Intervaling() {
    const [list, setList] = useState('b 3 v x g'.split(' '));
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        console.log('hi1');
        let timeout;
        for (let i=0;i<list.length;i++) {
            timeout = setTimeout(() => {
                // console.log('hi2');
                console.log(list[i]);
            }, 1000*i)
        } 

        return () => clearTimeout(timeout); // Cleanup the interval on component unmount
    }, [list, currentIndex]);
    return (
        <div>Intervaling</div>
    )
}
