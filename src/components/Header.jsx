// src/components/Header.jsx
import { useState } from 'react';
import { FiBell, FiSearch, FiUser, FiChevronDown, FiMenu } from 'react-icons/fi';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Mobile menu button (hidden on desktop) */}
        <button
          className="lg:hidden text-gray-500 hover:text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FiMenu size={24} />
        </button>

        {/* Search bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-1 max-w-md mx-4">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none w-full"
          />
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          {/* Notification bell */}
          <button className="relative text-gray-500 hover:text-gray-600">
            <FiBell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>

          {/* User profile dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <FiUser className="text-blue-600" />
              </div>
              <span className="hidden md:inline text-sm font-medium">Admin User</span>
              <FiChevronDown className="hidden md:inline" />
            </button>

            {/* Dropdown menu */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile search (hidden on desktop) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-3">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;