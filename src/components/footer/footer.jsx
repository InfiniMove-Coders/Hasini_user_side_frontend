import React from 'react';
import { Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-violet-500 text-white w-full">
      <div className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-white text-4xl font-bold">
            <img
              src="/images/icons/logo.png"
              alt="Logo"
              className="mb-4 w-20 h-20 ml-20"
            />
          </div>

          <p className="text-sm leading-relaxed opacity-90">
            Hasini Enterprises, your trusted destination for fine treats and delicacies. We are
            a first-time venture! Established with a passion for delivering happiness in every bite, we are
            committed to providing high-quality products to our precious clients.
          </p>
          <p className="text-sm leading-relaxed opacity-90">
            Ready to stock your shelves with the best snacks in town? Contact us today!
          </p>
          <p className="text-sm font-medium">Call Us - 9998776655</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6">Shop</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm hover:underline">Chocolates</a></li>
            <li><a href="#" className="text-sm hover:underline">Biscuits</a></li>
            <li><a href="#" className="text-sm hover:underline">Snacks</a></li>
            <li><a href="#" className="text-sm hover:underline">Fruits</a></li>
            <li><a href="#" className="text-sm hover:underline">Miscellaneous</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6">Information</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm hover:underline">About Us</a></li>
            <li><a href="contact" className="text-sm hover:underline">Contact Us</a></li>
            <li><a href="#" className="text-sm hover:underline">Terms and Conditions</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6">Get our latest info</h3>
          <p className="text-sm opacity-90">To get offers and discount news, you can subscribe us on mail</p>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Enter your mail id"
              className="w-full px-4 py-2 rounded text-gray-800 bg-white"
            />
            <button
              type="submit"
              className="w-full text-white px-4 py-2 text-sm border border-white rounded-lg p-4 "
            >
              Subscribe Now!
            </button>
          </div>

          <div className="mt-28 border border-white rounded-lg p-4">
            <div className="flex space-x-4">
              <p className="text-sm mb-4">Follow us on</p>
              <a href="#" className="bg-white text-violet-500 p-2 rounded-full hover:opacity-90">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white text-violet-500 p-2 rounded-full hover:opacity-90">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white text-violet-500 p-2 rounded-full hover:opacity-90">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-4">
        <p className="text-center text-sm opacity-90">
          Hasini Enterprises © All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;