import React from 'react';
import { Heart, ChevronRight } from 'lucide-react';
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
}) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log(`Adding ${id} to cart`);
    navigate('/itemdetails');
  };

  const handleToggleWishlist = () => {
    console.log(`Toggling wishlist for ${id}`);
  };
  return (
    <div className="w-64 p-4 bg-white rounded-lg shadow-md border border-gray-200 flex-shrink-0">

      <div className="relative mb-4">
        <img src={imagesrc} alt={name} className="w-full h-48 object-contain" />
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={() => onToggleWishlist(id)}
        >
          <Heart className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{packageInfo}</p>

        <div className="flex items-center space-x-2 mt-2">
          <span className="text-gray-400 line-through">₹{originalPrice}</span>
          <span className="text-blue-600 font-medium">{discountPercentage}% off</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">₹{finalPrice}</span>
            <span className="text-sm text-gray-500">@₹{pricePerPiece}-per piece</span>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 font-bold">{rating}</span>
            <span className="text-yellow-400 ml-1">★</span>
          </div>
        </div>

        <button
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-4"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
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

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Biscuits</h2>
              </div>
        
              <div className="flex overflow-x-scroll space-x-4 pb-4 scrollbar-hide">
                {products.slice(0, 7).map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}

                {products.length > 7 && (
                  <div className="flex flex-col items-center justify-center">
                    <button
                      className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-md"
                      onClick={handleViewMore}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <span className="text-blue-600 font-medium mt-2">View More</span>
                  </div>
                )}
              </div>
            </div>
          );
        };
export default Category2;