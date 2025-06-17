import React from 'react'
import AnoopImg from '../assets/Anoop.jpg';

function ProfileCard() {
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-purple-900'>
        <div className='flex flex-col items-center  justify-center text-center text-black space-y-4 p-6 animate-bounce hover:animate-none'
            style={{ fontFamily: "Fondamento , cursive" }}>
            <p className='m-2 text-4xl'>ANOOP KUMAR BURNWAL</p>
            <p className='m-2 text-2xl'>An Undergrad Student at NIT JSR :) </p>
        </div>
        <div class="w-108 h-108 rounded-full bg-cover bg-center border-3 border-amber-800 animate-pulse hover:animate-none" style={{ backgroundImage: `url(${AnoopImg})` }}>
        </div>
    </div>
  )
}

export default ProfileCard
