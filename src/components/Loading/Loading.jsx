import React from 'react';

const Loading = () => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <div
        className="absolute inset-0 bg-white"
        style={{
          backgroundImage: `url('/images/chaithu/choco_icon.png')`,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0',
          backgroundRepeat: 'repeat',
          opacity: 0.7
        }}
      />

      <div
        className="absolute inset-0 bg-transparent"
        style={{
          backgroundImage: `url('/images/chaithu/candy_icon.png')`,
          backgroundSize: '80px 80px', 
          backgroundPosition: '50px 50px', 
          backgroundRepeat: 'repeat',
          opacity: 0.7
        }}
      />


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src="/images/chaithu/Strome.gif" 
          alt="Chocolate Storm" 
          className="w-35 h-35 md:w-48 md:h-48"
        />
      </div>

      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#8B4513' }}>
          Get Ready !!!
        </h1>
        <p className="text-2xl" style={{ color: '#8B4513' }}>
          The Chocolate Storm is Coming!!!
        </p>
      </div>
    </div>
  );
};

export default Loading;