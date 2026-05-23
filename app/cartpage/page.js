"use client";
import { useCart } from "../context/CartContext";
import Navb from "../components/navb";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const [orders, setOrders] = useState([]);
  const [view, setView] = useState("cart"); 

  const fetchOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.id) return;
    const res = await fetch(`http://localhost:5000/api/orders/user/${user.id}`);
    const data = await res.json();
    if (data.success) setOrders(data.orders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCheckout = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?.id) return alert("Please sign in first");
      if (cart.length === 0) return alert("Cart is empty");

      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: user.id, cart, total }),
      });

      const data = await res.json();
      if (data.success) {
        clearCart();
        await fetchOrders();
        setView("orders");
      } else {
        alert("x " + data.message);
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Navb />
      <div className="mt-28 w-full px-6 pb-12">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-y-4 w-full max-w-[50rem] font-aldrich">

            {/* Tabs */}
            <div className="flex gap-3">
              <button onClick={() => setView("cart")}
                className={`px-5 py-2 rounded-lg font-semibold transition-all ${view === "cart" ? "bg-black text-white" : "bg-zinc-100 text-gray-600 hover:bg-zinc-200"}`}>
                Cart {cart.length > 0 && `(${cart.length})`}
              </button>
              <button onClick={() => setView("orders")}
                className={`px-5 py-2 rounded-lg font-semibold transition-all ${view === "orders" ? "bg-black text-white" : "bg-zinc-100 text-gray-600 hover:bg-zinc-200"}`}>
                My Orders {orders.length > 0 && `(${orders.length})`}
              </button>
            </div>

            {view === "cart" && (
              <>
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center gap-4 mt-20">
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                    <Link href="/productspage"
                      className="px-6 py-2.5 bg-gray-200 hover:bg-white text-gray-800 rounded-lg font-semibold transition-all duration-200 active:scale-95">
                      Browse Products
                    </Link>
                  </div>
                ) : (
                  <>
                    {cart.map((item) => (
                      <div key={item.id} className="w-full h-16 bg-zinc-100 rounded-[5px] flex items-center px-5 justify-between">
                        <span className="font-semibold text-gray-800">{item.name}</span>
                        <div className="flex items-center gap-6">
                          <span className="text-gray-500 text-sm">x{item.quantity}</span>
                          <span className="font-bold text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
                          <button onClick={() => removeFromCart(item.id)}
                            className="text-sm px-3 py-1 bg-gray-200 hover:bg-white rounded-lg transition-all">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="w-full bg-zinc-100 rounded-[5px] p-5 flex items-center justify-between">
                      <span className="font-bold text-gray-800">Total</span>
                      <span className="font-bold text-gray-700">${total.toFixed(2)}</span>
                    </div>

                    <button onClick={handleCheckout}
                      className="w-full py-3 bg-gray-200 hover:bg-white text-gray-800 text-lg font-bold rounded-lg transition-all duration-200 active:scale-95">
                      Checkout
                    </button>
                  </>
                )}
              </>
            )}

            {view === "orders" && (
              <>
                {orders.length === 0 ? (
                  <p className="text-gray-400 text-center mt-10">No orders yet</p>
                ) : (
                  orders.map((order) => (
                    <div key={order.id} className="w-full bg-zinc-100 rounded-[5px] p-5 flex flex-col gap-2">
               
                      <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                        <span className="font-bold text-gray-800">Order #{order.id}</span>
                        <span className="text-sm text-gray-400">{new Date(order.created_at).toLocaleDateString()}</span>
                      </div>
                  
                      {order.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-gray-700">{item.name}</span>
                          <div className="flex gap-4 text-sm text-gray-500">
                            <span>x{item.quantity}</span>
                            <span>${Number(item.price).toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
       
                      <div className="flex items-center justify-between border-t border-zinc-200 pt-2 mt-1">
                        <span className="font-bold text-gray-800">Total</span>
                        <span className="font-bold text-gray-700">${Number(order.total).toFixed(2)}</span>
                      </div>
                    </div>
                  ))
                )}
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}