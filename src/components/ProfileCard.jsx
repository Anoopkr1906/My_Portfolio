// import React from 'react'
// import AnoopImg from '../assets/Anoop.jpg';
// import { useState, useEffect } from 'react';

// import Img1 from '../assets/images/img1.jpg';
// import Img2 from '../assets/images/img2.jpg';
// import Img3 from '../assets/images/img3.jpg';

// const images = [
//   Img1,
//   Img2,
//   Img3,
// ];

// function ProfileCard() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 2000); // 2 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='flex items-center min-h-screen justify-center flex-col bg-gradient-to-r from-blue-900 to-purple-900 p-4'>
//         <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 m-4 lg:m-8'>
//           <div className='flex flex-col items-center justify-center text-center text-black space-y-2 lg:space-y-4 p-4 lg:p-6 order-2 lg:order-1'
//             style={{ fontFamily: "Fondamento , cursive" }}>
//             <p className='m-2 text-2xl sm:text-3xl lg:text-4xl'>ANOOP KUMAR BURNWAL</p>
//             <p className='m-2 text-lg sm:text-xl lg:text-2xl'>An Undergrad Student at NIT JSR  *_*</p>
//             <br />
//             <div className='text-left'>
//               <p className='text-lg lg:text-xl mb-2'><b>Experience</b></p>
//               <ul className='text-sm sm:text-base lg:text-lg space-y-1'>
//                 <li>🟨 Web team - Team INNOREVA, Best tech team at NIT JSR.</li>
//                 <li>🟩 Web team - Research and Consultancy Club, Best tech team at NIT JSR.</li>
//                 <li>🧭 Web team and EM Team - Soft Skills Club, Best tech team at NIT JSR.</li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-cover bg-center border-4 border-amber-800 animate-pulse hover:animate-none order-1 lg:order-2" style={{ backgroundImage: `url(${AnoopImg})` }}>
//           </div>
//         </div>
//         <div className='m-4 px-4'>
//           <p className='m-2 text-3xl sm:text-4xl lg:text-5xl text-center' style={{ fontFamily: "Fondamento , cursive" }}>Welcome To my PORTFOLIO .</p>
//         </div>
//         <div className='m-4 text-black animate-pulse hover:animate-none px-4'
//           style={{ fontFamily: "Caparsimo" }}>
//           <p className='m-2 text-lg sm:text-xl lg:text-2xl text-center'>⭐  This is a place where I showcase my skills, projects, and experiences. Feel free to explore and connect with me!</p>
//           <p className='m-2 text-lg sm:text-xl lg:text-2xl text-center'>⭐  I am passionate about web development, programming, and continuous learning.</p>
//         </div>


//         <div className='m-4 text-black animate-pulse hover:animate-none px-4'>
//           <img src={images[index]} alt={`Slide ${index + 1}`} className="object-contain w-full h-[20%]" />
//         </div>

//     </div>
//   )
// }

// export default ProfileCard

import React from 'react'
import AnoopImg from '../assets/Anoop.jpg';
import { useState, useEffect } from 'react';

import Img1 from '../assets/images/img1.jpg';
import Img2 from '../assets/images/img2.jpg';
import Img3 from '../assets/images/img3.jpg';

const images = [
  Img1,
  Img2,
  Img3,
];

function ProfileCard() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Stop auto-slide when hovered
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds auto-slide
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  const goToPrevious = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (

    <div className='flex items-center min-h-screen justify-center flex-col bg-gradient-to-r from-blue-900 to-purple-900 p-4'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 m-4 lg:m-8'>
          <div className='flex flex-col items-center justify-center text-center text-black space-y-2 lg:space-y-4 p-4 lg:p-6 order-2 lg:order-1'
            style={{ fontFamily: "Fondamento , cursive" }}>
            <p className='m-2 text-2xl sm:text-3xl lg:text-4xl'>ANOOP KUMAR BURNWAL</p>
            <p className='m-2 text-lg sm:text-xl lg:text-2xl'>An Undergrad Student at NIT JSR  *_*</p>
            <br />
            <div className='text-left'>
              <p className='text-lg lg:text-xl mb-2'><b>Experience</b></p>
              <ul className='text-sm sm:text-base lg:text-lg space-y-1'>
                <li>🟨 Web team - Team INNOREVA, Best tech team at NIT JSR.</li>
                <li>🟩 Web team - Research and Consultancy Club, Best tech team at NIT JSR.</li>
                <li>🧭 Web team and EM Team - Soft Skills Club, Best tech team at NIT JSR.</li>
              </ul>
            </div>
          </div>
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-cover bg-center border-4 border-amber-800 animate-pulse hover:animate-none order-1 lg:order-2" style={{ backgroundImage: `url(${AnoopImg})` }}>
          </div>
        </div>
        
        <div className='m-4 px-4'>
          <p className='m-2 text-3xl sm:text-4xl lg:text-5xl text-center' style={{ fontFamily: "Fondamento , cursive" }}>Welcome To my PORTFOLIO .</p>
        </div>
        
        <div className='m-4 text-black animate-pulse hover:animate-none px-4'
          style={{ fontFamily: "Caparsimo" }}>
          <p className='m-2 text-lg sm:text-xl lg:text-2xl text-center'>⭐  This is a place where I showcase my skills, projects, and experiences. Feel free to explore and connect with me!</p>
          <p className='m-2 text-lg sm:text-xl lg:text-2xl text-center'>⭐  I am passionate about web development, programming, and continuous learning.</p>
        </div>

        {/* Enhanced Slideshow Component */}
        <div 
          className='relative w-full max-w-2xl mx-auto px-4 mb-8'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='relative bg-white rounded-2xl shadow-2xl overflow-hidden'>
            {/* Main Image Container */}
            <div className='relative h-64 sm:h-80 md:h-96 overflow-hidden'>
              <img 
                src={images[index]} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105" 
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black bg-opacity-50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                {index + 1} / {images.length}
              </div>
            </div>

            {/* Slideshow Controls */}
            <div className='bg-gradient-to-r from-gray-100 to-gray-200 p-3 sm:p-4'>
              {/* Dot Indicators */}
              <div className='flex justify-center space-x-2'>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      idx === index 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-gray-400 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileCard

