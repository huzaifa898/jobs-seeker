import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

function Hero({ title, subtitle }) {
  return (
    <section
      className="bg-indigo-700 py-20 mb-4 bg-cover bg-center h-screen"
      style={{ 
        backgroundImage: `url('https://www.haleymarketing.com/wp-content/uploads/2021/09/1158445_Haley-Marketing_Facebook-Featured-and-Social-Sharing-Images-for-September_5b_090721.jpg')`, 
        filter: 'brightness(0.6)' // Reduces brightness to 60%
      }}
    >
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent sm:text-5xl md:text-6xl font-serif tracking-tight">
            {title}
          </h1>
          <p className="my-4 text-xl text-black font-medium sm:text-2xl md:text-3xl font-mono italic bg-white px-4 py-2 rounded-md inline-flex items-center justify-center">
            <FaSearch className="mr-2 text-black" /> {/* Add the search icon */}
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
