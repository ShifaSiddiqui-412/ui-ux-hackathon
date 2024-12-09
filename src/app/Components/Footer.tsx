import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Links Section */}
          <div className="w-full sm:w-auto">
            <h4 className="text-sm font-semibold">Find a Store</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li><Link href="#">Become a Member</Link></li>
              <li><Link href="#">Sign Up for Email</Link></li>
              <li><Link href="#">Send Us Feedback</Link></li>
              <li><Link href="#">Student Discounts</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h4 className="text-sm font-semibold">Get Help</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li><Link href="#">Order Status</Link></li>
              <li><Link href="#">Delivery</Link></li>
              <li><Link href="#">Returns</Link></li>
              <li><Link href="#">Payment Options</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h4 className="text-sm font-semibold">About Nike</h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li><Link href="#">News</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Investors</Link></li>
              <li><Link href="#">Sustainability</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex items-start gap-4">
            <FaTwitter className="text-lg hover:text-gray-400 cursor-pointer" />
            <FaFacebook className="text-lg hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="text-lg hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="text-lg hover:text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-wrap justify-between items-center text-xs text-gray-500">
          {/* Location and Copyright */}
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <IoLocationOutline className="text-lg" />
            <p>India</p>
            <p>&copy; 2023 Nike, Inc. All Rights Reserved</p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:underline">Guides</Link>
            <Link href="#" className="hover:underline">Terms of Sale</Link>
            <Link href="#" className="hover:underline">Terms of Use</Link>
            <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
