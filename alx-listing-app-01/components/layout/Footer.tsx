import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyStay. All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
