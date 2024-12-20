import Image from 'next/image';
import Link from 'next/link';


const Topheader = () => {
  return (
    <div>
      <header className="bg-[#F5F5F5] border-b font-sans flex justify-between items-center px-10 py-2">
        {/* Logo Section */}
        <div>
          <Image
            src="/favicon.svg"
            width={20}
            height={20}
            alt="Logo"
            className="w-5 h-5"
          />
        </div>

        {/* Links Section */}
        <nav>
          <ul className="flex items-center space-x-3 text-black text-xs font-medium">
            <li className="flex items-center">
              <Link href="/Components/store-locator" className="hover:underline">
                Find Link Store
              </Link>
              <span className="h-3.5 w-px bg-gray-400 mx-3"></span>
            </li>
            <li className="flex items-center">
              <Link href="/Components/contact" className="hover:underline">
                Help
              </Link>
              <span className="h-3.5 w-px bg-gray-400 mx-3"></span>
            </li>
            <li className="flex items-center">
              <Link href="/Components/joinus" className="hover:underline">
                Join Us
              </Link>
              <span className="h-3.5 w-px bg-gray-400 mx-3"></span>
            </li>
            <li className="flex items-center">
              <Link href="/Components/login" className="hover:underline">
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Topheader;
