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
    <div className="bg-blue-600 w-full py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-2xl font-bold text-center mb-8">
          OUR GENUINITY
        </h2>
        <div className="flex flex-wrap justify-between items-center gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white"
            >
              <img 
                src={feature.imageSrc}
                alt={feature.title}
                className="w-22 h-20 mb-3 object-contain"
              />
              <span className="text-sm text-center whitespace-nowrap">
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