import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      {/* Main navigation */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div>
          <Image
            src="/logo.svg"
            width={30}
            height={30}
            alt="Nike Logo"
            className="w-[30px] sm:w-[60px] md:w-[78px]"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex gap-4 md:gap-4 text-gray-700 font-medium text-[10px] sm:text-[14px] md:text-[16px]">
          {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map(
            (link, index) => (
              <Link
                key={index}
                href="#"
                className="hover:text-black whitespace-nowrap"
              >
                {link}
              </Link>
            )
          )}
        </nav>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          {/* Search Input (Desktop) */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none "
            />
            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Action Icons */}
          <FaHeart className="text-gray-700  sm:w-[20px] sm:h-[20px] md:w-[20px] md:h-[20px]  cursor-pointer hover:text-black" />
          <FaShoppingBag className="text-gray-700  sm:w-[20px] sm:h-[20px] md:w-[20px] md:h-[20px]  cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none"
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;

