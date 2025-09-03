import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token")
    const fetchCart = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cart`,{
                  headers: {
                    "Authorization":`Bearer ${token}`,
                    "Content-Type": "application/json"
                  }
              });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCartItems(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleRemove = async (id) => {
    try {
      const token = localStorage.getItem("token")
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cart/remove/${id}`, {
        method: "DELETE",
        headers: {
                    "Authorization":`Bearer ${token}`,
                    "Content-Type": "application/json"
                  }
      });
      setCartItems((prev) => prev.filter((item) => item.cartId !== id));
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  return (
    <div className="w-full min-h-screen font-serif bg-gradient-to-br from-black via-slate-700 to-slate-300 overflow-x-hidden">
      <Navbar/>
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Your Cart
        </h1>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <motion.div
              className="w-12 h-12 border-4 border-t-4 border-gray-300 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>
        ) : error ? (
          <p className="text-center text-red-400">Failed to load cart 😢</p>
        ) : cartItems.length === 0 ? (
          <p className="text-center text-gray-300">Your cart is empty 🛒</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item) => (
              <motion.div
                key={item.cartId}
                className="bg-white rounded-2xl shadow-lg p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.product.productImage}
                  alt={item.product.productName}
                  className="w-full h-60 object-cover rounded-xl"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-lg font-semibold">{item.product.productName}</h2>
                  <p className="text-gray-600 mt-2">₹{item.product.productPrice}</p>
                  <p className="text-gray-500 mt-1">Quantity: {item.quantity}</p>
                  <div className="mt-4 flex gap-2">
                    <button
                      className="w-1/2 bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition"
                      onClick={() => handleRemove(item.cartId)}
                    >
                      Remove
                    </button>
                    <button className="w-1/2 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
                      Checkout
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
