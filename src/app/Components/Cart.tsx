import Image from "next/image";
import Link from "next/link";

export default function Cart() {
    return (
        <div className="container mx-auto px-4">
            {/* Breadcrumb Section */}
            <div className="flex flex-wrap justify-between items-center py-6 border-b">
                <div className="text-gray-600">
                    <Link href="/" className="hover:text-gray-800">
                        Home
                    </Link>{" "}
                    /{" "}
                    <Link href="/shop" className="hover:text-gray-800">
                        Shop
                    </Link>{" "}
                    / Asgaard Sofa
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-wrap mt-6">
                {/* Left Section (Images) */}
                <div className="w-full lg:w-1/2 space-y-4">
                    <div className="grid grid-cols-4 gap-2">
                        {/* Thumbnails */}
                        {[...Array(4)].map((_, index) => (
                            <Image
                                key={index}
                                src={`/Man/M${11 - index}.png`} // Example image paths
                                alt={`Thumbnail ${index}`}
                                width={100}
                                height={100}
                                className="rounded-md border"
                            />
                        ))}
                    </div>
                    <Image
                        src="/Man/M11.png"
                        alt="Asgaard Sofa"
                        width={500}
                        height={400}
                        className="rounded-lg"
                    />
                </div>

                {/* Right Section (Product Details) */}
                <div className="w-full lg:w-1/2 lg:pl-12 space-y-6">
                    <h1 className="text-3xl font-semibold">Asgaard Sofa</h1>
                    <p className="text-xl text-gray-700">Rs. 250,000.00</p>
                    <div className="flex items-center space-x-2">
                        <Image src="/Es3.png" alt="Rating" width={20} height={20} />
                        <span>5 Customer Reviews</span>
                    </div>
                    <p className="text-gray-600">
                        Setting the bar as one of the loudest speakers in its class, the
                        Kilburn is a compact, stout-hearted hero with a well-balanced audio
                        which boasts a clear midrange and extended highs for a sound.
                    </p>

                    {/* Size Options */}
                    <div className="space-y-2">
                        <p className="font-medium">Size</p>
                        <div className="flex space-x-4">
                            {["L", "XL", "XS"].map((size) => (
                                <button
                                    key={size}
                                    className="border px-4 py-2 rounded-md hover:bg-gray-200"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color Options */}
                    <div className="space-y-2">
                        <p className="font-medium">Color</p>
                        <div className="flex space-x-4">
                            {["/Shoes/Sh12.png", "/Shoes/Sh13.png", "/Shoes/Sh14.png"].map(
                                (color, index) => (
                                    <Image
                                        key={index}
                                        src={color}
                                        alt={`Color ${index}`}
                                        width={30}
                                        height={30}
                                        className="rounded-full border"
                                    />
                                )
                            )}
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="flex items-center space-x-4">
                        <input
                            type="number"
                            min="1"
                            defaultValue="1"
                            className="border px-4 py-2 w-16 rounded-md"
                        />
                        <Link href="/cart">
                            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
                                Add to Cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Additional Information */}
            <div className="mt-10">
                <div className="flex justify-center space-x-6 text-lg border-b pb-4">
                    <button className="text-black font-semibold">Description</button>
                    <button className="text-gray-600">Additional Information</button>
                    <button className="text-gray-600">Reviews [5]</button>
                </div>
            </div>
        </div>
    );
}
