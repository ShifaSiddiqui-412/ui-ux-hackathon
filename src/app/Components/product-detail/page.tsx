import Image from "next/image";
import Link from "next/link";

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-8">
  

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Left: Product Image */}
        <div className="flex justify-center">
          <Image
            src="/Shoes/Sh6.png"
            alt="Nike Air Force 1"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Nike Air Force 1 PLT.AF.ORM
          </h1>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its “inside out”-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add creative appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release an
            artisan finish.
          </p>
          <p className="text-2xl font-semibold text-gray-900 mt-6">₹ 8,695.00</p>

          <a href="/Components/cart">
          <button  className="mt-6 px-6 py-3 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-all">
          Add to Cart
          </button>
          </a> 
        </div>
      </main>


    </div>
  );
};

export default ProductDetail;
