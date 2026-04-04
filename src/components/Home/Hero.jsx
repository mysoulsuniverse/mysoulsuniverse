import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imageModules = import.meta.glob('../../assets/carousel/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}', { eager: true });
    const imageUrls = Object.values(imageModules).map((mod) => mod.default);
    setImages(imageUrls);
  }, []);

  useEffect(() => {
    if (images.length <= 1) return; 
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='bg-bg pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden'>
        
        {/* TEXT SECTION */}
        <div className='text-center px-5 sm:px-8 max-w-7xl mx-auto'>
            {/* Removed hardcoded [40px] and -mt-7. Replaced with fluid text-4xl to 6xl and leading-tight */}
            <h1 className='text-dark-green text-4xl sm:text-5xl lg:text-6xl font-medium hero-phrase leading-tight'>
              Empowering Teams, Youth, and Individuals 
            </h1>
            <h1 className='text-dark-green text-4xl sm:text-5xl lg:text-6xl font-medium hero-phrase leading-tight sm:mt-2'>
              to Thrive Through Holistic Wellbeing
            </h1>

            <p className='mt-6 max-w-2xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl px-2'>
              We help organizations reduce burnout, equip youth with confidence, and guide individuals to
              live aligned, resilient, and purpose-driven lives.
            </p>
        </div>

        {/* BUTTONS SECTION */}
        {/* Mobile: Stacked full-width buttons. Desktop: Side-by-side buttons */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 px-5 mt-10 max-w-xs sm:max-w-none mx-auto'>
            <Link to='/contacts' className='w-full sm:w-auto'>
                <button className='w-full sm:w-auto justify-center bg-dark-green px-6 md:px-8 py-4 rounded-xl text-goldenrod flex items-center gap-2 cursor-pointer hover:bg-opacity-90 transition-all shadow-md font-semibold text-base md:text-lg'>
                    Book Your Consultation
                    <svg className="icon w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.75 4C10.75 7.13537 12.9567 9.83761 16.0288 10.4642L19.9559 11.2651C20.3046 11.3363 20.5553 11.6427 20.556 11.9985C20.5567 12.3544 20.3072 12.6618 19.9588 12.7343L16.2209 13.512C13.1471 14.1516 10.9439 16.8604 10.9439 20H9.44394C9.44394 16.8801 11.218 14.1071 13.8966 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H13.7392C11.0416 9.90807 9.25 7.12986 9.25 4H10.75Z" fill="#D7A24E"></path>
                </svg>
                </button>
            </Link>

            <Link to='/services' className='w-full sm:w-auto'>
                <button className='w-full sm:w-auto justify-center bg-goldenrod px-6 md:px-8 py-4 rounded-xl text-dark-green flex items-center gap-2 cursor-pointer hover:bg-opacity-90 transition-all shadow-md font-semibold text-base md:text-lg'>
                    Explore Our Programs
                    <svg className="icon w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.75 4C10.75 7.13537 12.9567 9.83761 16.0288 10.4642L19.9559 11.2651C20.3046 11.3363 20.5553 11.6427 20.556 11.9985C20.5567 12.3544 20.3072 12.6618 19.9588 12.7343L16.2209 13.512C13.1471 14.1516 10.9439 16.8604 10.9439 20H9.44394C9.44394 16.8801 11.218 14.1071 13.8966 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H13.7392C11.0416 9.90807 9.25 7.12986 9.25 4H10.75Z" fill="#184D3A"></path>
                </svg>
                </button>
            </Link>
        </div>

        {/* CAROUSEL SECTION */}
        {/* Removed max-w-[400px]. Height now scales perfectly from 300px on phones up to 550px on desktop */}
        <div className='flex justify-center mt-16 md:mt-20 px-4 sm:px-8'>
            <div className='relative w-full max-w-[1200px] h-[300px] sm:h-[400px] lg:h-[550px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl bg-dark-green/10'>
                {images.length > 0 && (
                    <AnimatePresence>
                        <motion.img 
                            key={currentIndex}
                            src={images[currentIndex]}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className='absolute inset-0 w-full h-full object-cover'
                            alt={`Hero carousel image ${currentIndex + 1}`}
                        />
                    </AnimatePresence>
                )}
            </div>
        </div>
    </div>
  )
}

export default Hero