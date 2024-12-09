import Image from 'next/image';

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
            {["Find a Store", "Help", "Join Us", "Sign In"].map((link, index) => (
              <li key={index} className="flex items-center">
                <a href={link === "Find a Store" ? "/" : `#${link.replace(/\s+/g, '').toLowerCase()}`} className="hover:underline">
                  {link}
                </a>
                {index < 3 && (
                  <span className="h-3.5 w-px bg-gray-400 mx-3"></span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Topheader;
