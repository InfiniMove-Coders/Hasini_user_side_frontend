import React from 'react';
import Navbar1 from '../navbar/Navbar1';
import Navbar2 from '../navbar/Navbar2';
import Footer from '../footer/footer';
import Category3 from '../Categories/Category3';

const AboutPage = () => {
  return (
    <>
      <div className="w-[100%] h-auto fixed top-[0px] z-[5]">
        <Navbar1 />
        <Navbar2 />
      </div>
      {/*Desktop Layout*/}
      <div className="hidden md:block mt-[200px] mb-[50px]">
        <div className="relative bg-[#133DF6] w-full mt-20 p-8">
          <div className="absolute sm:left-10 lg:left-40 sm: -top-20 lg:w-40 lg:h-40 sm:w-10 sm:h-10 bg-[#133DF6] border-8 border-white rounded-full p-2 shadow-lg flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center rounded-full">
              <img
                src="/images/icons/logo.png"
                alt="Hasini Enterprises Logo"
                className="lg:w-20 lg:h-20 w-10 h-10 object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between lg:pt-24 sm:pt-11">
            <div className="flex flex-col items-start max-w-2xl">
              <p className="text-white lg:text-2xl sm:text-l font-bold mb-2">HASINI ENTERPRISES</p>
              <p className="text-white lg:text-lg sm:text-xs">No.1 Wholesale Enterprise for Chocolates and Biscuits</p>
            </div>

            <div className="absolute lg:right-8 lg:-top-4 lg:-bottom-13 sm:right-8 ">
              <div className="w-48 h-48 sm:w-80 sm:h-80">
                <img
                  src="/images/ganesh/store.png"
                  alt="Store Icon"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-justify justify-center max-w-8xl py-12 px-6 sm:px-20">
          <p className="text-gray-800 mb-6 text-xl sm:text-2xl">
            Hasini Enterprises, your trusted destination for the finest selection of wholesale biscuits, chocolates, and kids' snacks!
            Established with a passion for delivering happiness in every bite, we are committed to providing high-quality products
            to retailers and businesses at competitive prices.
          </p>

          <p className="text-gray-800 text-xl sm:text-2xl">
            Ready to stock your shelves with the best snacks in town? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 ml-8 sm:ml-16">
          <div className="bg-white rounded-3xl border-2 p-4 flex flex-col items-center w-48 sm:w-56 max-w-xs ml-10">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <img src="/images/ganesh/ab1.png" alt="Sellers" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">10.5k</h3>
            <p className="text-gray-600 text-center">Sellers active on our site</p>
          </div>

          <div className="bg-[#133DF6] rounded-3xl border-2 p-4 flex flex-col items-center text-white w-48 sm:w-56 max-w-xs ml-10">
            <div className="bg-white/20 p-4 rounded-full mb-4">
              <img src="/images/ganesh/ab2.png" alt="Monthly Sales" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">33k</h3>
            <p className="text-center">Monthly Product Sales</p>
          </div>

          <div className="bg-white rounded-3xl border-2 p-4 flex flex-col items-center w-48 sm:w-56 max-w-xs ml-10">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <img src="/images/ganesh/ab3.png" alt="Customers" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">45.5k</h3>
            <p className="text-gray-600 text-center">Customers active on our site</p>
          </div>

          <div className="bg-white rounded-3xl border-2 p-4 flex flex-col items-center w-48 sm:w-56 max-w-xs ml-10">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <img src="/images/ganesh/ab4.png" alt="Annual Sales" className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">25k</h3>
            <p className="text-gray-600 text-center">Annual gross sales on our site</p>
          </div>
        </div>
      </div>

      {/* Mobile Layout*/}
      <div className="md:hidden mt-[47dvw] mb-[10dvw]">
        <div className="relative bg-[#133DF6] w-full mt-16 p-2">
          <div className="absolute left-4 -top-8 w-16 h-16 bg-[#133DF6] border-4 border-white rounded-full shadow-lg flex items-center justify-center">
            <img
              src="/images/icons/logo.png"
              alt="Hasini Enterprises Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex flex-col pt-8">
            <div className="flex items-start justify-between">
              <div className="flex flex-col items-start">
                <p className="text-white text-xs font-bold">HASINI ENTERPRISES</p>
                <p className="text-white text-xs">No.1 Wholesale Enterprise for Chocolates <br />and Biscuits</p>
              </div>

              <div className="w-32 h-32 absolute -top-5 right-1">
                <img
                  src="/images/ganesh/store.png"
                  alt="Store Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-6">
          <p className="text-gray-800 mb-4 text-xs">
            Hasini Enterprises, your trusted destination for the finest selection of wholesale biscuits, chocolates, and kids' snacks!
            Established with a passion for delivering happiness in every bite, we are committed to providing high-quality products
            to retailers and businesses at competitive prices.
          </p>

          <p className="text-gray-800 text-xs">
            Ready to stock your shelves with the best snacks in town? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 px-1">
          <div className="bg-white rounded-2xl border-2 p-2 flex flex-col items-center">
            <div className="bg-gray-100 p-2 rounded-full">
              <img src="/images/ganesh/ab1.png" alt="Sellers" className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold ">10.5k</h3>
            <p className="text-gray-600 text-center text-xs">Sellers active</p>
          </div>

          <div className="bg-[#133DF6] rounded-2xl border-2 p-2 flex flex-col items-center text-white">
            <div className="bg-white/20 p-2 rounded-full">
              <img src="/images/ganesh/ab2.png" alt="Monthly Sales" className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold ">33k</h3>
            <p className="text-center text-xs">Monthly Sales</p>
          </div>

          <div className="bg-white rounded-2xl border-2 p-2 flex flex-col items-center">
            <div className="bg-gray-100 p-2 rounded-full">
              <img src="/images/ganesh/ab3.png" alt="Customers" className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold ">45.5k</h3>
            <p className="text-gray-600 text-center text-xs">Customers</p>
          </div>

          <div className="bg-white rounded-2xl border-2 p-2 flex flex-col items-center">
            <div className="bg-gray-100 p-2 rounded-full ">
              <img src="/images/ganesh/ab4.png" alt="Annual Sales" className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold">25k</h3>
            <p className="text-gray-600 text-center text-xs">Annual sales</p>
          </div>
        </div>
      </div>
      <div className='mb-3'>
      <Category3/>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;