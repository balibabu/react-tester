import React, { useRef } from 'react';

export default function Swipe() {
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
        touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
        if (!touchStartX.current || !touchStartY.current) return;

        const touchEndX = event.touches[0].clientX;
        const touchEndY = event.touches[0].clientY;

        const deltaX = touchEndX - touchStartX.current;
        const deltaY = touchEndY - touchStartY.current;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                console.log('right');
                alert('right');
            } else {
                alert('left');
                console.log('left');
            }
        } else {
            if (deltaY > 0) {
                alert('bottom');
                console.log('bottom');
            } else {
                alert('top');
                console.log('top');
            }
        }

        touchStartX.current = null;
        touchStartY.current = null;
    };

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            style={{ width: '100%', height: '100dvh', backgroundColor: 'lightgray' }}
        >
            Swipe in any direction!
        </div>
    );
};

