import React from 'react'

export default function ImageCard({ url }) {
    console.log(url);

    return (
        <div>
            <img src={url} alt={url} style={imgStyle} />
        </div>
    )
}

const imgStyle = {
    // width: "200px"
}




// const [, setInitialFetch] = useState(true);

//     useEffect(() => {
//         setInitialFetch((prev) => {
//             if (prev) {
//                 getImages(setImageUrls);
//             }
//             return false;
//         })
//     }, []);