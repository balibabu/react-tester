import React, { useState, useEffect } from 'react';
import getImages from './utils/getImages';
import ImageCard from './ImageCard';
import LazyLoadImg from './LazyLoadImg';
import Masonry from 'react-responsive-masonry';
import IntersectionObserverComponent from './IntersectionObserverComponent';

export default function Photography() {
    const [imageUrls, setImageUrls] = useState([]);
    const [, setInitialFetch] = useState(true);

    useEffect(() => {
        setInitialFetch((prev) => {
            if (prev) {
                getImages(setImageUrls);
            }
            return false;
        })
    }, []);

    return (
        <div>
            {!imageUrls.length && <h1>No images</h1>}
            <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={10}>
                {imageUrls.map((url) => {
                    return <ImageCard url={url} key={url} />
                })}
            </Masonry>
            <IntersectionObserverComponent />
            <LazyLoadImg images={imageUrls} />
        </div>
    );
};

