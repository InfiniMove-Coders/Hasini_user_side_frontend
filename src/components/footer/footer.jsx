import React from 'react';
import { Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-violet-500 text-white w-full">
      <div className="hidden md:block">
        <div className="flex justify-between px-6 py-4">

          <div className="max-w-sm">
            <img
              src="/images/icons/logo.png"
              alt="HE"
              className="w-20 h-20 ml-36"
            />
            <p className="text-m mb-4 text-justify">
              Hasini Enterprises, your trusted destination for the finest selection of wholesale biscuits,
              chocolates, and kids' snacks! Established with a passion for delivering happiness in every bite,
              we are committed to providing high-quality products to retailers and businesses at competitive prices.
            </p>
            <p className="text-m">
              Ready to stock your shelves with the best snacks in town? Contact us today!
            </p>
            <p className="text-m mt-4 font-bold">Call Us - 9988776655</p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-m">Chocolates</a></li>
                <li><a href="#" className="text-m">Biscuits</a></li>
                <li><a href="#" className="text-m">Snacks</a></li>
                <li><a href="#" className="text-m">Fruits</a></li>
                <li><a href="#" className="text-m">Miscellaneous</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Information</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-m">About Us</a></li>
                <li><a href="/contact" className="text-m">Contact Us</a></li>
                <li><a href="#" className="text-m">Terms and Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="max-w-sm">
            <h3 className="text-3xl font-bold mb-5">Get our latest info</h3>
            <p className="text-m mb-4 text-justify ">
              To get offers and discount news, you can subscribe us on mail.
            </p>
            <input
              type="email"
              placeholder="Enter your mail id"
              className="w-full px-4 py-2 rounded text-gray-800 mb-2"
            />
            <button
              type="submit"
              className="w-full border border-white rounded py-2 text-sm"
            >
              Subscribe Now!
            </button>
          </div>
        </div>

        <div className="flex justify-end items-center px-6">
          <div className="flex items-center gap-4 bg-transparent border-2 rounded-lg px-4 py-2">
            <span className="text-sm">Follow us on</span>
            <div className="flex gap-2">
              <a href="#" className="bg-white text-violet-500 p-1.5 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white text-violet-500 p-1.5 rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white text-violet-500 p-1.5 rounded-full">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-sm space-x-2 mt-4">
          <span>Copyright © 2024 Hasini Enterprises | Powered By</span>
          <img className="h-7 w-auto" src="/images/icons/companyLogo.svg" alt="Logo" />
          <span>InfiniMove</span>
        </div>

      </div>

      {/* Mobile Layout */}
      <div className="md:hidden p-4">
        <div className="flex flex-row">
          <div className="w-1/2">
            <img
              src="/images/icons/logo.png"
              alt="HE"
              className="w-16 h-16 mb-4 ml-10"
            />
            <p className="text-sm mb-4">
              Hasini Enterprises, your trusted destination for the finest selection of wholesale biscuits,
              chocolates, and kids' snacks! Established with a passion for delivering happiness in every bite,
              we are committed to providing high-quality products to retailers and businesses at competitive prices.
              Ready to stock your shelves with the best snacks in town? Contact us today!
            </p>
            <p className="text-sm">Call Us - 9988776655</p>
          </div>

          <div className="w-1/2 pl-4">
            <div className="mb-4">
              <h3 className="text-lg font-bold ">Shop</h3>
              <ul className="text-sm">
                <li><a href="#">Chocolates</a></li>
                <li><a href="#">Biscuits</a></li>
                <li><a href="#">Snacks</a></li>
                <li><a href="#">Fruits</a></li>
                <li><a href="#">Miscellaneous</a></li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold ">Information</h3>
              <ul className=" text-sm">
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="#">Terms and Conditions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold">Get our latest info</h3>
              <p className="text-sm mb-2">To get offers and discount news, you can subscribe us on mail.</p>
              <input
                type="email"
                placeholder="Enter your mail id"
                className="w-full px-3 py-1 rounded text-gray-800 mb-2 text-sm"
              />
              <button className="w-full border border-white rounded py-1 text-sm">
                Subscribe Now!
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center">
          <div className="border border-white rounded-lg p-1 mb-4">
            <div className="flex items-center gap-3">
              <p className="text-sm">Follow us on</p>
              <div className="flex gap-2">
                <a href="#" className="bg-white text-violet-500 p-1.5 rounded-full">
                  <Facebook size={16} />
                </a>
                <a href="#" className="bg-white text-violet-500 p-1.5 rounded-full">
                  <Instagram size={16} />
                </a>
                <a href="#" className="bg-white text-violet-500 p-1.5 rounded-full">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
          <p className='text-xs'>Copyright © 2024 Hasini Enterprises</p>
          <div className="flex items-center justify-center text-xs">
            <p>Powered By</p>
            <img className="h-7 w-auto" src="/images/icons/companyLogo.svg" alt="Logo" />
            <span>InfiniMove</span>
          </div>
          <div className='mb-14'></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
