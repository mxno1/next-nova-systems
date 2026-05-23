"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const sync = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const newId = user?.id || null;

      if (newId !== userId) {
        setUserId(newId);
        if (newId) {
          const saved = localStorage.getItem(`cart_${newId}`);
          setCart(saved ? JSON.parse(saved) : []);
        } else {
          setCart([]);
        }
      }
    };

    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [userId]);

  useEffect(() => {
    if (userId) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
    }
  }, [cart, userId]);

  const addToCart = (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.id) return alert("Please sign in first");
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    if (userId) localStorage.removeItem(`cart_${userId}`);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}