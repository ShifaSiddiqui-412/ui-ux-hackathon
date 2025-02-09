import Image from "next/image";
import Link from "next/link";
import Shoes from "@/app/Components/shoes/page";


export default function Hero() {
  return(
    <div>
      <div className="w-screen bg-gray-100">
        {/* Hero Section */}
        <div className="relative w-full">
          <div className="text-center  mb-4">
            <h1 className="font-bold text-black pt-6">Hello Nike App</h1>
            <p className="text-black">Download the app to access everything Nike. <span className="underline font-bold ">Get Your Great</span></p>
          </div>
          <Image
            src="/Shoes/Shoepic1.png"
            alt="Sneaker"
            width={1200}
            height={600}
            className="rounded mx-auto"
          />
        </div>

        {/* Content Section */}
        <div className="relative flex flex-col items-center text-center bg-white py-12 px-6">
          {/* Section Title */}
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            First Look
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-black">
            NIKE AIR MAX PULSE
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—
            designed to push you past your limits and help you go to the max.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
              Notify Me
            </button>
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
               Shop Air Max 
            </button>
          </div>
        </div>

        {/* Best of Air Max Section */}
        <div className="bg-white px-6 py-8">
          {/* Title and Shop Button */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Best of Air Max</h2>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2  text-black font-bold bg-gray-200 rounded-full hover:bg-gray-400">
                Shop
              </button>
              <div className="flex gap-2">
                <button className="p-2 text-black  bg-gray-100 rounded-full hover:bg-gray-400">
                  ←
                </button>
                <button className="p-2 text-black  bg-gray-300 rounded-full hover:bg-gray-400">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div>
            <Shoes />
          </div>
        </div>


        <div className="relative bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Image
              src="/Man/M1.jpg"
              alt="Running Man"
              width={1200}
              height={600}
              className="rounded-lg mx-auto"
            />
            <h1 className="mt-8 text-4xl font-bold text-gray-900 tracking-tight">
              STEP INTO WHAT FEELS GOOD
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Cause everyone should know the feeling of running in that perfect pair!
            </p>
            <button className="mt-6 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
              <Link href="/Components/shoes/page">Find Your Shoe</Link>
            </button>
          </div>
        </div>

        {/* Gear Up Section */}
        <div className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Gear Up</h2>

            {/* Shop Men's and Women's */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
              <div className="flex items-center">
                <h3 className="text-xl font-bold text-gray-900">Shop Men</h3>
                <button className="p-2 ml-4 bg-gray-100 rounded-full hover:bg-gray-200 transition">←</button>
                <button className="p-2 ml-2 bg-gray-300 rounded-full hover:bg-gray-400 transition">→</button>
              </div>
              <div className="flex items-center">
                <h3 className="text-xl font-bold text-gray-900">Shop Women</h3>
                <button className="p-2 ml-4 bg-gray-100 rounded-full hover:bg-gray-200 transition">←</button>
                <button className="p-2 ml-2 bg-gray-300 rounded-full hover:bg-gray-400 transition">→</button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { src: "/Man/M2.png", name: "Nike Dri-FIT ADV TechKnit Ultra", price: "Rs. 3,895" },
                { src: "/Man/M5.png", name: "Nike Dri-FIT Challenger", price: "Rs. 2,495" },
                { src: "/Woman/W1.png", name: "Nike Dri-FIT ADV Run Division", price: "Rs. 5,295" },
                { src: "/Woman/W2.png", name: "Nike Fast", price: "Rs. 3,795" }
              ].map((product, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <Image src={product.src} alt={product.name} width={300} height={300} className="rounded-lg" />
                  <p className="mt-4 font-medium text-gray-700">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fullscreen Sneaker Image */}
        <div> <h3>Dont Miss</h3></div>
        <div className="w-full h-screen bg-gray-100 relative">

          <Image
            src="/Man/M4.png"
            alt="Sneaker"
            fill
            className="h-600 w-1200 rounded mx-auto "

          />
        </div>

        {/* Flight Essentials Section */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold underline text-black">Flight Essentials</h1>
            <p className="mt-4 text-lg text-gray-600">
              Built to last all week—but with style only Jordan Brand can deliver.
            </p>
            <button className="mt-6 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
              Shop
            </button>
          </div>
        </div>

        {/* Product Display Section */}

        <div className="max-w-[1440px] mx-auto px-4 mb-6">
          <h2 className="text-lg font-bold text-[#111] mb-6">The Essentials</h2>
          <div className="flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative">
                <Image
                  src={"/Es1.png"}
                  alt={"Men's"}
                  width={500}
                  height={500}
                  className="object-cover"
                />

              </div>
              <div>

                <Image
                  src={"/Es2.png"}
                  alt={"Woman's"}
                  width={500}
                  height={500}
                  className="object-cover"
                />

              </div>
              <div>

                <Image
                  src={"/Es3.png"}
                  alt={"Men's"}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}