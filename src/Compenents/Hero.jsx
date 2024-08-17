import React from 'react';

function Hero({ title, subtitle }) {
  return (
    <section
      className="bg-indigo-700 py-20 mb-4 bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210912/pngtree-people-looking-for-jobs-with-words-job-seeker-image_877069.jpg')` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
