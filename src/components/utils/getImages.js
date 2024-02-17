export default async function getImages(setImageUrls) {
    let x = 0;
    const images=[]
    try {
        while (true) {
            x++;
            let imageUrl = `https://raw.githubusercontent.com/storeage/images/main/${x}.jpg`;
            await checkImage(imageUrl);
            setImageUrls((prev)=>[...prev,imageUrl])
            images.push(imageUrl);
        }
    } catch (error) {
        // setImageUrls(images);
        // console.log('fetched all the images');
    }
};

const checkImage = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
    });
};

// const checkImage = (url) => {
//     return new Promise((resolve, reject) => {
//         const img = new Image();
//         const customResolve = () => {
//             console.log(img);
//             resolve();
//         };
//         const customReject = () => {
//             console.log('img didnt success');
//             reject();
//         };
//         img.onload = customResolve;
//         img.onerror = customReject;
//         img.src = url;
//     });
// };
