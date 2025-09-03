import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(""); // ✅ popup message
  const [quantities, setQuantities] = useState({}); // ✅ track per-product quantity

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/store`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProducts(data);
        // Initialize quantities
        const initialQuantities = {};
        data.forEach((p) => (initialQuantities[p.id] = 1));
        setQuantities(initialQuantities);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, value),
    }));
  };

  const handleAddToCart = async (productId) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/cart/add/${productId}?quantity=${quantities[productId]}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) throw new Error("Failed to add to cart");
      setMessage("✅ Product added to cart!");
      setTimeout(() => setMessage(""), 2000); // popup disappears after 2 sec
    } catch (err) {
      setMessage("❌ Failed to add product");
      setTimeout(() => setMessage(""), 2000);
    }
  };

  return (
    <div className="w-full min-h-screen font-serif bg-gradient-to-br from-black via-slate-700 to-slate-300 overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Our Watch Collection
        </h1>

        {/* ✅ Popup Message */}
        {message && (
          <motion.div
            className="fixed top-5 right-5 bg-black text-white px-6 py-3 rounded-xl shadow-lg z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {message}
          </motion.div>
        )}

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <motion.div
              className="w-12 h-12 border-4 border-t-4 border-gray-300 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>
        ) : error ? (
          <p className="text-center text-red-400">Failed to load products 😢</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-300">No products available</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg p-4"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-60 object-cover rounded-xl"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-lg font-semibold">
                    {product.productName}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    ₹{product.productPrice}
                  </p>

                  {/* ✅ Quantity Selector */}
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded-lg"
                      onClick={() =>
                        handleQuantityChange(
                          product.id,
                          quantities[product.id] - 1
                        )
                      }
                    >
                      -
                    </button>
                    <span className="px-4">{quantities[product.id]}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded-lg"
                      onClick={() =>
                        handleQuantityChange(
                          product.id,
                          quantities[product.id] + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  {/* ✅ Add to Cart */}
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
