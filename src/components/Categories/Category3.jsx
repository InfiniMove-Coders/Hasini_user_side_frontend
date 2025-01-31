import React from 'react';

const Category3 = () => {
  const features = [
    {
      imageSrc: "/images/chaithu/POP.gif",
      title: 'Prior Customer Satisfaction',
    },
    {
      imageSrc: "/images/chaithu/fast.gif",
      title: 'Fast Delivery',
    },
    {
      imageSrc: "/images/chaithu/serve.gif",
      title: 'Serving 1000+ Customers',
    },
    {
      imageSrc: "/images/chaithu/trust.gif",
      title: 'Always Trusted',
    },
    {
      imageSrc: "/images/chaithu/quality.gif",
      title: 'Quality Verified Products',
    },
  ];

  return (
<div className="bg-gradient-to-br from-blue-700 via-blue-700 to-blue-200 w-full py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-2xl font-bold text-center mb-8">
          OUR GENUINITY
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 sm:gap-2 md:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-white`}
            >
              <img
                src={feature.imageSrc}
                alt={feature.title}
                className="w-16 h-16 mb-3 object-contain sm:w-24 sm:h-24"
              />
              <span className="text-xs text-center sm:text-xs whitespace-nowrap">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category3;
