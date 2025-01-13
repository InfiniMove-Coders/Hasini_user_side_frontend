import React from 'react';

const Category4 = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <div className="w-full space-y-4">

        <div className="grid grid-cols-2 gap-4">
          <div className="relative bg-[#8B4513] h-48 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[url('/api/placeholder/1200/300')] opacity-50"></div>
            <div className="relative flex items-center h-full p-8 space-x-6">
              <div className="flex items-center">
                <div className="text-yellow-400 font-bold text-6xl">FLASH</div>
                <div className="flex items-center">
                  <div className="text-yellow-400 font-bold text-6xl ml-4">SALE</div>
                  <svg className="w-12 h-12 text-yellow-400 ml-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 3L0 14l6 2 4 6 3-11 11-3z" />
                  </svg>
                </div>
              </div>
              <div className="bg-red-600 text-white px-6 py-3 rounded-lg text-xl">
                UP TO 50% OFF
              </div>
            </div>
          </div>


          <div className="bg-white p-8 rounded-lg shadow-lg bg-blue-600">
            <h2 className="text-blue-600 text-4xl font-bold mb-6 text-center">Shop Now !</h2>
            <div className="grid grid-cols-3 gap-6 ">
              {['Dairy Melts', 'Klassik cocoa', 'Dark & White'].map((product) => (
                <div key={product} className="flex h-36 flex-col bg-blue-600 rounded-lg overflow-hidden">
                  <div className="p-4 text-white text-lg text-center mb-7">
                    {product}
                  </div>
                  <button className="w-20 ml-16 bg-blue-600 hover:bg-blue-800 border border-white transition-colors text-white py-2 px-4 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="ml-2">Add</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-blue-600 text-4xl font-bold mb-6 text-center">Add to Your Cart</h2>
            <div className="grid grid-cols-3 gap-6">
              {[
                'Blueberry Butter Combo',
                'Butter-scotch & Vanilla',
                'Choco- Vanilla Combo'
              ].map((product) => (
                <div key={product} className="flex h-36 flex-col bg-blue-600 rounded-lg overflow-hidden">
                  <div className="p-4 text-white text-lg text-center">
                    {product}
                  </div>
                  <button className="w-20 ml-16 bg-blue-600 hover:bg-blue-800 transition-colors text-white py-2 px-4 flex items-center justify-center border border-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="ml-2">Add</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-100 p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-center h-full">
              <div className="flex space-x-8">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="relative">
                    <div className="w-32 h-44 bg-blue-200 rounded-lg flex items-center justify-center">
                      <img 
                        src="/api/placeholder/150/200" 
                        alt={`Product ${index}`}
                        className="w-28 h-40 object-cover rounded"
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8">
                      <img 
                        src="/api/placeholder/40/40" 
                        alt="Cookie" 
                        className="rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-right">
                <div className="text-red-600 font-bold text-2xl">MEGA OFFER</div>
                <div className="text-6xl font-bold">
                  UP TO <span className="text-red-600">60%</span>
                </div>
                <div className="text-red-600 font-bold text-6xl">OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category4;