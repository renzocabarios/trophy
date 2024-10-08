import Image from 'next/image'; // Import Next.js Image component
import React, { useEffect, useState } from 'react';

// Define the type for image data
type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Array of image details
const images: ImageData[] = [
  { src: '/assets/nfts/Beez-nft.png', alt: 'Beez NFT', width: 190, height: 190 },
  { src: '/assets/nfts/DivineDAO-nft.png', alt: 'DivineDAO NFT', width: 190, height: 190 },
  { src: '/assets/nfts/DivineDOG-nft.png', alt: 'DivineDOG NFT', width: 190, height: 190 },
  { src: '/assets/nfts/Dripfrog-nft.png', alt: 'Dripfrog NFT', width: 190, height: 190 },
  { src: '/assets/nfts/GhostFace-nft.png', alt: 'GhostFace NFT', width: 190, height: 190 },
  { src: '/assets/nfts/Noryoz-nft.png', alt: 'Noryoz NFT', width: 190, height: 190 },
  { src: '/assets/nfts/Pandas-nft.png', alt: 'Pandas NFT', width: 190, height: 190 },
  { src: '/assets/nfts/SolidPass-nft.png', alt: 'SolidPass NFT', width: 190, height: 190 },
  { src: '/assets/nfts/SpudSquad-nft.png', alt: 'SpudSquad NFT', width: 190, height: 190 },
  { src: '/assets/nfts/SurfShark-nft.png', alt: 'SurfShark NFT', width: 190, height: 190 },
];

// Utility function to shuffle images
const shuffledArray = (array: ImageData[]) => {
  const shuffledArray = array.slice();
  let prevImage: ImageData | null = null;
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
  const [numberOfRows, setNumberOfRows] = useState(3); // Default rows for desktop

  // Function to handle resizing and updating the number of rows based on screen size
  const updateRowsBasedOnScreenSize = () => {
    if (window.innerWidth <= 768) {
      setNumberOfRows(2); // 2 rows for mobile view
    } else {
      setNumberOfRows(3); // Default rows for larger screens
    }
  };

  useEffect(() => {
    updateRowsBasedOnScreenSize(); // Initial check on component mount
    window.addEventListener('resize', updateRowsBasedOnScreenSize); // Add resize listener

    return () => window.removeEventListener('resize', updateRowsBasedOnScreenSize); // Cleanup
  }, []);

  const imagesPerRow = 9;
  const rows = Array.from({ length: numberOfRows }).map(() => {
    let row: ImageData[] = []; // Explicitly type the row as an array of ImageData objects
    let availableImages = shuffledArray(images);

    while (row.length < imagesPerRow) {
      if (availableImages.length === 0) {
        availableImages = shuffledArray(images);
      }
      const nextImage = availableImages.pop()!;
      if (row.length === 0 || row[row.length - 1] !== nextImage) {
        row.push(nextImage);
      }
    }

    return row;
  });

  return (
    <div className="flex flex-col overflow-hidden w-[40vw] relative will-change-transform"> {/* Carousel container */}
      {rows.map((row, rowIndex) => (
        <div className="flex flex-nowrap animate-scroll w-[200%] gap-y-4" key={rowIndex}> {/* Carousel row with gap */}
          {[...row, ...row].map((image, index) => (
            <div className="min-w-[200px] mx-[15px]" key={index}> {/* Carousel item */}
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
  
};

export default InfiniteCarousel;
