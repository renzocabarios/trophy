import React from 'react';
// import beez from '../../assets/nfts/Beez_nft.svg';
// import divineDAO from '../../assets/nfts/DivineDAO_nft.svg';
// import divineDOG from '../../assets/nfts/DivineDOG_nft.svg';
// import dripFrog from '../../assets/nfts/Dripfrog_nft.svg';
// import ghostFace from '../../assets/nfts/GhostFace_nft.svg';
// import noryoz from '../../assets/nfts/Noryoz_nft.svg';
// import pandas from '../../assets/nfts/Pandas_nft.svg';
// import solidPass from '../../assets/nfts/SolidPass_nft.svg';
// import spudSquad from '../../assets/nfts/SpudSquad_nft.svg';
// import surfShark from '../../assets/nfts/SurfShark_nft.svg';

const images = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    // beez,
    // divineDAO,
    // divineDOG,
    // dripFrog,
    // ghostFace,
    // noryoz,
    // pandas,
    // solidPass,
    // spudSquad,
    // surfShark,
];

const shuffledArray = (array: string[]): string[] => {
    const shuffledArray = array.slice();
    let prevImage: string | null = null;
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        if (shuffledArray[j] === prevImage) {
            j = i; 
        }
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        prevImage = shuffledArray[i];
    }
    return shuffledArray;
};

const InfiniteCarousel: React.FC = () => {
    const numberOfRows = 3;
    const imagesPerRow = 9;

    const rows = Array.from({ length: numberOfRows }).map(() => {
        let row: string[] = [];
        let availableImages = shuffledArray(images);

        while (row.length < imagesPerRow) {
            if (availableImages.length === 0) {
                availableImages = shuffledArray(images);
            }
            const nextImage = availableImages.pop();
            if (nextImage && (row.length === 0 || row[row.length - 1] !== nextImage)) {
                row.push(nextImage);
            }
        }

        return row;
    });

    return (
        <div className="flex flex-col overflow-hidden w-[40vw] relative shadow-lg will-change-transform">
            {rows.map((row, rowIndex) => (
                <div
                    className="flex flex-nowrap animate-scroll"
                    key={rowIndex}
                    style={{ width: '200%' }}
                >
                    {[...row, ...row].map((src, index) => (
                        <div className="min-w-[200px] m-4" key={index}>
                            <img src={src} alt={`Image ${index + 1}`} className="w-[200px] h-auto" />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default InfiniteCarousel;
