import React from 'react'
import AnoopImg from '../assets/Anoop.jpg';

function ProfileCard() {
  return (
    <div className='flex items-center justify-center flex-col h-screen bg-gradient-to-r from-blue-900 to-purple-900 p-4'>
        <div className='flex items-center justify-center m-2'>
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
    </div>
  )
}

export default ProfileCard
