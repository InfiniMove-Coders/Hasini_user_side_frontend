import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
  id,
  name,
  imagesrc = '/images/chaithu/Choco.jpg',
  packageInfo,
  originalPrice,
  discountPercentage,
  finalPrice,
  pricePerPiece,
  rating,
  Productkey=1
}) => {
  const [favourite, setFavourite] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/itemdetails', { state: { product: { id, name, imagesrc, packageInfo, originalPrice, discountPercentage, finalPrice, pricePerPiece, rating } } });
  };

  const handleToggleFavourite = (e) => {
    e.stopPropagation();
    setFavourite(!favourite);
  };

  return (
    <div className="w-36 sm:w-64 flex-shrink-0">
      <div 
        className="bg-white rounded-lg p-2 sm:p-3 flex flex-col items-start justify-start border-2 border-[#D9D9D9] gap-1 sm:gap-1 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={handleCardClick}
      >
        <div className="relative w-full h-28 sm:h-48 border border-[#D9D9D9] flex items-center justify-center rounded-lg overflow-hidden">
          <img 
            src={imagesrc} 
            alt={name} 
            className="max-h-full object-contain"
          />
          <button
            className="absolute bottom-1 right-1 border border-[rgba(0,0,0,0.5)] rounded-full shadow-[0px_0px_4px_rgba(0,0,0,0.2)] p-0.5 scale-90 bg-white cursor-pointer"
            onClick={handleToggleFavourite}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-4 h-4" 
              fill={favourite ? "red" : "none"}
              viewBox="0 0 24 24" 
              stroke={favourite ? "red" : "gray"}
              strokeWidth="2"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
          </button>
        </div>

        <h4 className="text-xs sm:text-xl text-[#262626]">{name}</h4>
        <p className="text-xs sm:text-sm text-[#686363]">{packageInfo}</p>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm text-[#686363] line-through">₹{originalPrice}</span>
            <span className="text-xs sm:text-sm text-[#133DF6] font-bold">{discountPercentage}% off</span>
          </div>
          <div className="flex items-center px-1 sm:px-2 bg-[#133DF6] text-white scale-90 rounded-md">
            <span className="text-xs sm:text-sm">{rating}</span>
            <span className="ml-0.5 scale-90 text-xs sm:text-sm">★</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-lg sm:text-2xl font-bold text-[#262626]">₹{finalPrice}</span>
          <span className="text-xs sm:text-sm font-bold opacity-90 scale-90">@₹{pricePerPiece}-per piece</span>
        </div>
      </div>
    </div>
  );
};

const Category2 = () => {
  const navigate = useNavigate();
  //backend data
  const products = [
    {
      id: "1",
      name: "Dairy Melts, Chocolate Bar",
      imageUrl: "/api/placeholder/400/320",
      packageInfo: "33 Pcs/Box, 24 Box/Carton",
      originalPrice: 170,
      discountPercentage: 3,
      finalPrice: 105,
      pricePerPiece: 5,
      rating: 4.5,
    },
    {
      id: "2",
      name: "Dairy Melts, Chocolate Bar",
      imageUrl: "/api/placeholder/400/320",
      packageInfo: "33 Pcs/Box, 24 Box/Carton",
      originalPrice: 170,
      discountPercentage: 3,
      finalPrice: 115,
      pricePerPiece: 5,
      rating: 4.5,
    },
    {
      id: "3",
      name: "Dairy Melts, Chocolate Bar",
      imageUrl: "/api/placeholder/400/320",
      packageInfo: "33 Pcs/Box, 24 Box/Carton",
      originalPrice: 170,
      discountPercentage: 3,
      finalPrice: 125,
      pricePerPiece: 5,
      rating: 4.5,
    },
    {
      id: "4",
      name: "Dairy Melts, Chocolate Bar",
      imageUrl: "/api/placeholder/400/320",
      packageInfo: "33 Pcs/Box, 24 Box/Carton",
      originalPrice: 170,
      discountPercentage: 3,
      finalPrice: 135,
      pricePerPiece: 5,
      rating: 4.5,
 
    },
    {
      id: "5",
      name: "Dairy Melts, Chocolate Bar",
      imageUrl: "/api/placeholder/400/320",
      packageInfo: "33 Pcs/Box, 24 Box/Carton",
      originalPrice: 170,
      discountPercentage: 3,
      finalPrice: 145,
      pricePerPiece: 5,
      rating: 4.5,
      
    },
    {
      id: "6",
      name: "Dairy Melts, Chocolate Bar",
      imageUrl: "/api/placeholder/400/320",
      packageInfo: "33 Pcs/Box, 24 Box/Carton",
      originalPrice: 170,
      discountPercentage: 3,
      finalPrice: 155,
      pricePerPiece: 5,
      rating: 4.5,
    
    },
    {
      id: "7",
      name: "Dairy Melts, Chocolate Bar",
      imageUrl: "/api/placeholder/400/320",
      packageInfo: "33 Pcs/Box, 24 Box/Carton",
      originalPrice: 160,
      discountPercentage: 3,
      finalPrice: 165,
      pricePerPiece: 5,
      rating: 4.5,
    
    },
    {
      id: "7",
      name: "Dairy Melts, Chocolate Bar",
      imageUrl: "/api/placeholder/400/320",
      packageInfo: "33 Pcs/Box, 24 Box/Carton",
      originalPrice: 170,
      discountPercentage: 3,
      finalPrice: 175,
      pricePerPiece: 5,
      rating: 4.5,
    }
  ];
  const handleViewMore = () => {
    navigate('/category');
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
    <div className="flex items-center">
      <h2 className="text-4xl font-semibold text-blue-600">Biscuits</h2>
      <span className="text-5xl text-blue-600  mb-6">→</span>
    </div>


      <div className="flex overflow-x-scroll space-x-4 pb-4 scrollbar-hide">
        {products.slice(0, 7).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}

        {products.length > 7 && (
          <div className="flex flex-col items-center justify-center flex-shrink-0">
            <button
              className="w-14 h-14 rounded-full bg-[#133DF6] flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-md"
              onClick={handleViewMore}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <span className="text-[#133DF6] font-medium mt-2">View More</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category2;