import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const thumbnailContainerRef = useRef(null);

  useEffect(() => {
    // Auto-discover all images in the folder

const imageModules = import.meta.glob('../../assets/gallery/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true });
    const imageUrls = Object.values(imageModules).map((mod) => mod.default);
    setImages(imageUrls);
  }, []);

  // Lightbox Navigation Handlers
  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-scroll the tiny thumbnails in the lightbox so the active one is always visible
  useEffect(() => {
    if (selectedIndex !== null && thumbnailContainerRef.current) {
      const activeThumbnail = thumbnailContainerRef.current.children[selectedIndex];
      if (activeThumbnail) {
        activeThumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedIndex]);

  return (
    <section className="bg-bg py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">Our Moments</h2>
          <div className="h-1.5 w-24 bg-goldenrod mx-auto rounded-full" />
          <p className="mt-6 text-gray-600">Swipe to explore our journey.</p>
        </div>

        {/* Horizontal Sliding Carousel */}
        <div className="flex overflow-x-auto gap-6 pb-10 pt-4 px-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {images.map((url, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="relative flex-none w-[280px] h-[320px] md:w-[350px] md:h-[400px] snap-center cursor-pointer group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* object-cover ensures they are ALL exactly the same size without stretching */}
              <img
                src={url}
                alt={`Moment ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                  <FiMaximize2 className="text-white text-3xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50 transition-colors">
              <FiX size={36} />
            </button>

            {/* Main Image Viewer */}
            <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center px-12 md:px-24">
              <button 
                onClick={handlePrev}
                className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors"
              >
                <FiChevronLeft size={48} />
              </button>

              {/* object-contain ensures the full, uncropped image is shown here */}
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={images[selectedIndex]}
                className="max-h-[70vh] w-auto max-w-full rounded-md shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
              />

              <button 
                onClick={handleNext}
                className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors"
              >
                <FiChevronRight size={48} />
              </button>
            </div>

            {/* Tiny Circle Thumbnails at the Bottom */}
            <div className="w-full pb-8 pt-4 px-5">
              <div 
                ref={thumbnailContainerRef}
                className="flex justify-start md:justify-center gap-3 overflow-x-auto py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                onClick={(e) => e.stopPropagation()}
              >
                {images.map((url, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedIndex(idx)}
                    className={`flex-none transition-all duration-300 rounded-full overflow-hidden border-2 ${
                      selectedIndex === idx 
                        ? 'border-goldenrod scale-110 opacity-100 w-16 h-16 shadow-[0_0_15px_rgba(218,165,32,0.5)]' 
                        : 'border-transparent opacity-40 hover:opacity-100 w-12 h-12'
                    }`}
                  >
                    <img src={url} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;