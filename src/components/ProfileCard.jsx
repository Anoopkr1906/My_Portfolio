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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex items-center min-h-screen justify-center flex-col bg-gradient-to-r from-blue-900 to-purple-900 p-4'>
        <div className='flex items-center justify-center m-8'>
          <div className='flex flex-col items-center  justify-center text-center text-black space-y-4 p-6 animate-bounce hover:animate-none'
            style={{ fontFamily: "Fondamento , cursive" }}>
            <p className='m-2 text-4xl'>ANOOP KUMAR BURNWAL</p>
            <p className='m-2 text-2xl'>An Undergrad Student at NIT JSR :) </p>
          </div>
          <div class="w-108 h-108 rounded-full bg-cover bg-center border-3 border-amber-800 animate-pulse hover:animate-none" style={{ backgroundImage: `url(${AnoopImg})` }}>
          </div>
        </div>
        <br />
        <br />

        <div className='m-4'>
          <p className='m-2 text-5xl' style={{ fontFamily: "Fondamento , cursive" }}>Welcome To my PORTFOLIO .</p>
          <p></p>
        </div>
        <div className='m-4 text-black animate-pulse hover:animate-none'
          style={{ fontFamily: "Caparsimo" }}>
          <p className='m-2 text-3xl'>⭐  This is a place where I showcase my skills, projects, and experiences. Feel free to explore and connect with me!</p>
          <p className='m-2 text-3xl'>⭐  I am passionate about web development, programming, and continuous learning.</p>
        </div>

    </div>
  )
}

export default ProfileCard


// import React, { useState, useEffect } from 'react';
// import AnoopImg from '../assets/Anoop.jpg';

// import Img1 from '../assets/images/img1.jpg';
// import Img2 from '../assets/images/img2.jpg';
// import Img3 from '../assets/images/img3.jpg';

// const images = [Img1, Img2, Img3];

// function ProfileCard() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='flex items-center justify-center flex-col bg-gradient-to-r from-blue-900 to-purple-900 p-4'>
//       <div className='flex items-center justify-center m-8'>
//         <div
//           className='flex flex-col items-center justify-center text-center text-black space-y-4 p-6 animate-bounce hover:animate-none'
//           style={{ fontFamily: "Fondamento , cursive" }}
//         >
//           <p className='m-2 text-4xl'>ANOOP KUMAR BURNWAL</p>
//           <p className='m-2 text-2xl'>An Undergrad Student at NIT JSR :) </p>
//         </div>
//         <div
//           className="w-48 h-48 rounded-full bg-cover bg-center border-4 border-amber-800 animate-pulse hover:animate-none"
//           style={{ backgroundImage: `url(${AnoopImg})` }}
//         ></div>
//       </div>

//       <div className='m-4'>
//         <p className='m-2 text-5xl' style={{ fontFamily: "Fondamento , cursive" }}>Welcome To my PORTFOLIO .</p>
//       </div>
//       <div
//         className='m-4 text-black animate-pulse hover:animate-none'
//         style={{ fontFamily: "Caparsimo" }}
//       >
//         <p className='m-2 text-3xl'>⭐  This is a place where I showcase my skills, projects, and experiences. Feel free to explore and connect with me!</p>
//         <p className='m-2 text-3xl'>⭐  I am passionate about web development, programming, and continuous learning.</p>
//       </div>

//       <div className='m-4 flex items-center justify-center'>
//         <div className='w-96 h-64'>
//           <img
//             src={images[index]}
//             alt={`Slide ${index + 1}`}
//             className="object-contain w-full h-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfileCard;
