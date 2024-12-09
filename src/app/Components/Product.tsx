import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";


// Product Data
const products = [
    {
        id: 1,
        name: "Nike Shoe",
        description: "Men's Running Shoe",
        price: "PKR 12,000",
        image: "/Shoes/Sh9.png",
    },
    {
        id: 2,
        name: "Adidas Shoe",
        description: "Men's Training Shoe",
        price: "PKR 10,500",
        image: "/Shoes/Sh10.png",
    },
    {
        id: 3,
        name: "Casual Tank Top",
        description: "Men's Activewear",
        price: "PKR 2,000",
        image: "/Man/M8.png",
    },
    {
        id: 4,
        name: "Sport Shorts",
        description: "Women's Activewear",
        price: "PKR 3,500",
        image: "/Woman/W5.png",
    },
];

const Productlist = () => {
    return (
        <div id="product">
            <Head>
                <title>Product Grid</title>
                <meta
                    name="description"
                    content="A responsive product grid using Next.js and Tailwind CSS."
                />
            </Head>

            <main className="min-h-screen bg-gray-100">
                {/* Page Title */}
                <h1 className="text-3xl font-extrabold text-center py-8 text-gray-800">
                    Our Products
                </h1>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {products.map((product) => (
                        <Link key={product.id} href={`/products/${product.id}`} passHref>
                            <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105">
                                {/* Product Image */}
                                <div className="relative w-full h-48">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-lg"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {product.description}
                                    </p>
                                    <p className="text-lg font-bold text-gray-900 mt-2">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Productlist;
