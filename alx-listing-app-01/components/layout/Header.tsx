import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-y-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">MyStay</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {['Rooms', 'Mansions', 'Countryside', 'Villas', 'Apartments'].map(
            link => (
              <a
                key={link}
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Search bar */}
        <div className="flex-1 mx-4 hidden md:block">
          <input
            type="text"
            placeholder="Search for places..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-3">
          <button className="text-gray-700 hover:text-indigo-600">
            Sign In
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
