import { useEffect, useRef } from "react";

export default function LazyLoadImg({ images }) {
    const imgRefs = useRef([]);
    useEffect(() => {
        const observer = new window.IntersectionObserver((entries, self) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadImages(entry.target);
                    self.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        imgRefs.current.forEach((imgRef) => {
            observer.observe(imgRef);
        });

        return () => {
            imgRefs.current.forEach((imgRef) => {
                observer.unobserve(imgRef);
            });
        };
    }, [images]);
    return (
        <div>
            {images.map((url, index) => (
                <div key={url}>
                    <img
                        ref={(el) => (imgRefs.current[index] = el)}
                        src=""
                        data-src={url}
                        alt={url}
                        style={{ width: "100px" }}
                    />
                </div>
            ))}
        </div>
    );
};


const loadImages = (image) => {
    image.src = image.dataset.src;
};