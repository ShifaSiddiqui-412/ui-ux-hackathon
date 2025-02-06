"use client";
import { useEffect, useState } from "react";
import { Product } from "../../../type/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    const handleRemove = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!",
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(id);
                setCartItems(getCartItems());
                Swal.fire("Removed!", "Item has been removed", "success");
            }
        });
    };

    const handleQuantityChange = (id: string, quantity: number) => {
        updateCartQuantity(id, quantity);
        setCartItems(getCartItems());
    };

    const handleIncrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product) handleQuantityChange(id, product.inventory + 1);
    };

    const handleDecrement = (id: string) => {
        const product = cartItems.find((item) => item._id === id);
        if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
    };
    const router = useRouter();

    const handleProceed = () => {
        Swal.fire({
            title: "Proceed To Checkout?",
            text: "Please review your cart before checkout",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Proceed!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Success", "Your Order has been successfully proceed!", "success");
              router.push("/checkout");
                setCartItems([]);
            }
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div
                            key={item._id}
                            className="flex justify-between items-center border-b py-4"
                        >
                            {item.image && (
                            <Image
                            src={urlFor(item.image).url()}
                            alt="image"
                            className="w-16 h-16 object-cover rounded"
                              width={500}
                              height={500}  
                            />
                            )}
                             <div>
                                    <h3 className="text-lg font-semibold">{item.productName}</h3>
                                    <p className="text-gray-600">${item.price}</p>
                                </div>
                           
                            <div className="flex items-center space-x-2">
                                <button
                                    className="px-3 py-1 bg-gray-200 rounded"
                                    onClick={() => handleDecrement(item._id)}
                                >
                                    -
                                </button>
                                <span className="px-4 py-1 border rounded">{item.inventory}</span>
                                <button
                                    className="px-3 py-1 bg-gray-200 rounded"
                                    onClick={() => handleIncrement(item._id)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={() => handleRemove(item._id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="text-right mt-6">
                        <h3 className="text-xl font-semibold">Total: ${calculateTotal()}</h3>
                        <button
                            className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                            onClick={handleProceed}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
