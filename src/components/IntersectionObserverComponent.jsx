import React, { useRef, useEffect, useState } from 'react';

const IntersectionObserverComponent = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.9,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} style={{height:'200px',backgroundColor:'red'}}>
            Observing this component
        </div>
    );
};

export default IntersectionObserverComponent;
