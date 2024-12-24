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
        image: "/Shoes/Sh1.png",
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
        description: "Womens Activewear",
        price: "PKR 3,500",
        image: "/Woman/W5.png",
    },
    {
        id: 5,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh2.png",
    },
    {
        id: 6,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh3.png",
    },
    {
        id: 7,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh4.png",
    },
    {
        id: 8,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh5.png",
    },
    {
        id: 9,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh6.png",
    },
    {
        id: 10,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh7.png",
    },
    {
        id: 11,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh8.png",
    },
    {
        id: 12,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh9.png",
    },
    {
        id: 13,
        name: "Shoes",
        description: "Womens Activewear",
        price: "PKR 3,500",
        image: "/Shoes/Sh10.png",
    },
    {
        id: 13,
        name: "Mens Wear",
        description: "Mens Activewear",
        price: "PKR 3,500",
        image: "/Man/M2.png",
    },
    {
        id: 14,
        name: "Mens Wear",
        description: "Mens Activewear",
        price: "PKR 3,500",
        image: "/Man/M3.png",
    },
    {
        id: 15,
        name: "Mens Wear",
        description: "Mens Activewear",
        price: "PKR 3,500",
        image: "/Man/M7.png",
    },
    {
        id: 16,
        name: "Mens Wear",
        description: "Mens Activewear",
        price: "PKR 3,500",
        image: "/Man/M5.png",
    },
    {
        id: 17,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh11.png",
    },
    {
        id: 18,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh12.png",
    },
    {
        id: 19,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh13.png",
    },
    {
        id: 20,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh14.png",
    },
    {
        id: 21,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh15.png",
    },
    {
        id: 22,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh16.png",
    },
    {
        id: 23,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh17.png",
    },
    {
        id: 24,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh18.png",
    },
    {
        id: 25,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh19.png",
    },
    {
        id: 26,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh20.png",
    },
    {
        id: 27,
        name: "Shoes",
        description: "Mens runnnig Shoe ",
        price: "PKR 3,500",
        image: "/Shoes/Sh21.png",
    },
    {
        id: 28,
        name: "Womens Wear",
        description: "Womens Activewear",
        price: "PKR 3,500",
        image: "/Woman/W1.png",
    },
    {
        id: 29,
        name: "Womens Wear",
        description: "Womens Activewear",
        price: "PKR 3,500",
        image: "/Woman/W2.png",
    },
    {
        id: 30,
        name: "Womens Wear",
        description: "Womens Activewear",
        price: "PKR 3,500",
        image: "/Woman/W3.png",
    },
    {
        id: 31,
        name: "Womens Wear",
        description: "Womens Activewear",
        price: "PKR 3,500",
        image: "/Woman/W4.png",
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
                                        fill
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
