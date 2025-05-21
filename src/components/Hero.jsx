import React, { useState, useEffect } from 'react';
import style from '../Color.module.css';
import ape1 from '../assets/arts/ape1.png';
import ape2 from '../assets/arts/0.jpeg'; // Import your other images
import ape3 from '../assets/arts/1.jpeg';
import ape4 from '../assets/arts/2.jpeg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [ape1, ape2, ape3, ape4]; // Array of your images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='pt-25 pb-25 bg-[#0d0611]'>
      <div className='flex items-center justify-around'>
        <div className=''>
          <h2 className={`${style.adFont} text-white`}>
            Discover, <br /> Collect & Sell <br />Extraordinary <br /> NFTs
          </h2>
        </div>
        <div className={style.imgContainer}>
          <img 
            src={images[currentImageIndex]} 
            className={style.imgSize} 
            alt="NFT Collection" 
          />
          <h2>Test</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;