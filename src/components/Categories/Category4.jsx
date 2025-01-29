import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category4 = () => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate('/category');
  };

  return (
    <div className="w-full min-h-auto bg-gray-100 p-2 md:p-4">
      <div className="w-full space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-auto rounded-lg overflow-hidden flex flex-col">
            <img
              src="/images/carousel/d.png"
              alt="Flash Sale Banner"
              className="w-full h-full object-cover"
              style={{ maxHeight: "280px" }}
            />
          </div>

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg flex flex-col justify-between md:min-h-[200px]">
            <h2 className="text-blue-600 text-2xl md:text-4xl font-bold mb-4 text-center">
              Shop Now!
            </h2>
            <div className="grid grid-cols-3 gap-2 md:gap-6">
              {['Dairy Melts', 'Klassik Cocoa', 'Dark & White'].map((product) => (
                <div
                  key={product}
                  className="flex h-auto lg:h-32 md:h-42 flex-col justify-between bg-gradient-to-r from-purple-900 to-blue-600 rounded-xl p-3"
                >
                  <div className="text-white text-lg md:text-lg lg:text-3xl font-medium text-center">
                    {product}
                  </div>
                  <button className="w-full lg:w-20 lg:ml-11 h-7 bg-transparent hover:bg-blue-700 border-2 border-white rounded-full transition-colors text-xs text-white py-1 px-2 flex items-center justify-center gap-1"
                  onClick={handleCardClick}>
                    <svg
                      className="lg:w-4 lg:h-4 h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-auto rounded-lg overflow-hidden flex flex-col order-1 md:order-2">
            <img
              src="/images/carousel/c.png"
              alt="Mega Offer Banner"
              className="w-full h-full object-cover"
              style={{ maxHeight: "280px" }}
            />
          </div>

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg flex flex-col justify-between order-2 md:order-1 md:min-h-[200px]">
            <h2 className="text-blue-600 text-2xl md:text-3xl font-bold mb-4 text-center">
              Add to Your Cart
            </h2>
            <div className="grid grid-cols-3 gap-2 md:gap-6">
              {[
                'Blueberry Butter Combo',
                'Butter-scotch& Vanilla',
                'Choco- Vanilla Combo',
              ].map((product) => (
                <div
                  key={product}
                  className="flex h-32 md:h-42 flex-col justify-between bg-gradient-to-r from-purple-900 to-blue-600 rounded-xl p-5"
                >
                  <div className="text-white text-l md:text-lg lg:text-2xl font-medium text-center">
                    {product}
                  </div>
                  <button className="w-full lg:w-20 lg:ml-11 h-7 bg-transparent hover:bg-purple-700 border-2 border-white rounded-full transition-colors text-xs text-white py-1 px-2 flex items-center justify-center gap-1"
                  onClick={handleCardClick}>
                    <svg
                      className="lg:w-4 lg:h-4 h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category4;
