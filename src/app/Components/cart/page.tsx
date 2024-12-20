import Image from "next/image";

const CartPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Main Content */}
            <main className="px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left: Bag Section */}
                <div className="md:col-span-2">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Bag</h2>

                    {/* Product 1 */}
                    <div className="flex items-start justify-between border-b pb-4 mb-4">
                        <Image
                            src="/Man/M7.png" // Replace with actual product image
                            alt="Product 1"
                            width={100}
                            height={100}
                            className="object-cover"
                        />
                        <div className="flex-1 ml-4">
                            <h3 className="text-sm font-semibold text-gray-900">
                                Nike Dri-FIT ADV TechKnit Ultra
                            </h3>
                            <p className="text-sm text-gray-600">
                                Men's Short-Sleeve Running Top
                            </p>
                            <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
                            <p className="text-sm text-gray-600">Size: M</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-sm text-gray-900 font-semibold">₹ 3,895.00</p>
                            
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="flex items-start justify-between border-b pb-4 mb-4">
                        <Image
                            src="/Shoes/Sh3.png" // Replace with actual product image
                            alt="Product 2"
                            width={100}
                            height={100}
                            className="object-cover"
                        />
                        <div className="flex-1 ml-4">
                            <h3 className="text-sm font-semibold text-gray-900">
                                Nike Air Max 97 SE
                            </h3>
                            <p className="text-sm text-gray-600">Men's Shoes</p>
                            <p className="text-sm text-gray-600">Flat Pewter/Light Bone</p>
                            <p className="text-sm text-gray-600">Size: 9</p>
                            <p className="text-sm text-gray-600">Quantity: 1</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-sm text-gray-900 font-semibold">₹ 16,995.00</p>
                        </div>
                    </div>
                </div>

                {/* Right: Summary Section */}
                <div className="border rounded-lg p-6 shadow-md">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Summary</h2>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <p>Subtotal</p>
                        <p>₹ 20,890.00</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                        <p>Estimated Delivery & Handling</p>
                        <p>Free</p>
                    </div>
                    <div className="flex justify-between text-lg font-semibold text-gray-900 mb-6">
                        <p>Total</p>
                        <p>₹ 20,890.00</p>
                    </div>
                    <button className="w-full px-6 py-3 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-all">
                        Member Checkout
                    </button>
                </div>
            </main>

        
        </div>
    );
};

export default CartPage;
