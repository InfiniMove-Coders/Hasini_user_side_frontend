import React from 'react';

const Category4 = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4">
      <div className="w-full space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-[276px] rounded-lg overflow-hidden">
            <img 
              src="/images/carousel/d.png" 
              alt="Flash Sale Banner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-blue-600 text-4xl font-bold mb-6 text-center">Shop Now !</h2>
            <div className="grid grid-cols-3 gap-6">
              {['Dairy Melts', 'Klassik cocoa', 'Dark & White'].map((product) => (
                <div key={product} className="flex h-36 flex-col bg-blue-600 rounded-lg overflow-hidden">
                  <div className="p-4 text-white text-lg text-center mb-7">
                    {product}
                  </div>
                  <button className="w-24 mx-auto bg-blue-600 hover:bg-blue-800 border border-white transition-colors text-white py-2 px-4 flex items-center justify-center">
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
                  <button className="w-24 mx-auto bg-blue-600 hover:bg-blue-800 transition-colors text-white py-2 px-4 flex items-center justify-center border border-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="ml-2">Add</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[276px] rounded-lg overflow-hidden">
            <img 
              src="/images/carousel/c.png" 
              alt="Mega Offer Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category4;