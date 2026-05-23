"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navb from "../components/navb";

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState("products");

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user || user.role !== "admin") router.push("/signpage");
  }, []);

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const fetchProducts = () => {
    fetch("http://localhost:5000/api/products")
      .then((r) => r.json())
      .then((d) => {
        setProducts(d.products);
        setLoadingProducts(false);
      });
  };

  const fetchOrders = () => {
    fetch("http://localhost:5000/api/orders")
      .then((r) => r.json())
      .then((d) => {
        setOrders(d.orders);
        setLoadingOrders(false);
      });
  };

  const handleDelete = (id) => {
    if (!confirm("Delete this product?")) return;
    fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    }).then(() => fetchProducts());
  };

  const handleAdd = () => {
    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    }).then(() => {
      fetchProducts();
      setShowAddForm(false);
      setNewProduct({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
      });
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-zinc-100 font-aldrich">
      <Navb />

      <div className="mt-28 w-full max-w-5xl px-6 pb-12">
       
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Admin Dashboard
        </h1>

      
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setTab("products")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              tab === "products"
                ? "bg-black text-white"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setTab("orders")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              tab === "orders"
                ? "bg-black text-white"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Orders
          </button>
        </div>

     
        {tab === "products" && (
          <div className="flex flex-col gap-4">
      
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="self-start px-6 py-2 bg-black text-white rounded-lg hover:bg-zinc-800 font-semibold"
            >
              {showAddForm ? "Cancel" : "+ Add Product"}
            </button>

         
            {showAddForm && (
              <div className="bg-white rounded-xl p-6 flex flex-col gap-3 shadow-sm border border-zinc-200">
                <h2 className="text-lg font-bold text-gray-800">New Product</h2>
                <input
                  placeholder="Name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  className="p-2 border border-zinc-300 rounded-md outline-none"
                />
                <input
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                  className="p-2 border border-zinc-300 rounded-md outline-none"
                />
                <div className="flex gap-3">
                  <input
                    placeholder="Price"
                    type="number"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                    className="p-2 border border-zinc-300 rounded-md outline-none w-1/2"
                  />
                  <input
                    placeholder="Stock"
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, stock: e.target.value })
                    }
                    className="p-2 border border-zinc-300 rounded-md outline-none w-1/2"
                  />
                </div>
                <input
                  placeholder="Image URL"
                  value={newProduct.image}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, image: e.target.value })
                  }
                  className="p-2 border border-zinc-300 rounded-md outline-none"
                />
                <button
                  onClick={handleAdd}
                  className="bg-black text-white py-2 rounded-md hover:bg-zinc-800 font-semibold"
                >
                  Add Product
                </button>
              </div>
            )}

         
            {loadingProducts ? (
              <div className="flex justify-center h-32 items-center">
                <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              products.map((p) => (
                <div
                  key={p.id}
                  className="w-full h-28 bg-white rounded-[5px] flex overflow-hidden shadow-sm border border-zinc-200"
                >
          
                  <div className="w-32 h-full flex items-center justify-center  bg-zinc-100 ">
                    {p.image ? (
                      <img
                        src={
                          p.image?.startsWith("http")
                            ? p.image
                            : `http://localhost:5000/uploads/${p.image}`
                        }
                        alt={p.name}
                        className="w-[74%] h-[55%] "
                      />
                    ) : (
                      <div className="w-[74%] h-[55%] flex items-center justify-center text-gray-400 text-6xl"></div>
                    )}
                  </div>
            
                  <div className="flex flex-col justify-center px-4 flex-1">
                    <h2 className="font-bold text-gray-800">{p.name}</h2>
                    <p className="text-sm text-gray-500 line-clamp-1">
                      {p.description}
                    </p>
                    <div className="flex gap-4 mt-1">
                      <span className="text-blue-600 font-semibold">
                        ${Number(p.price).toFixed(2)}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Stock: {p.stock}
                      </span>
                    </div>
                  </div>
              
                  <div className="flex items-center pr-4">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      
        {tab === "orders" && (
          <div className="flex flex-col gap-4">
            {loadingOrders ? (
              <div className="flex justify-center h-32 items-center">
                <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />
              </div>
            ) : orders.length === 0 ? (
              <p className="text-gray-400 text-center mt-10">No orders yet</p>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-xl p-5 shadow-sm border border-zinc-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="font-bold text-gray-800">
                        Order #{order.id}
                      </span>
                      <span className="ml-3 text-sm text-gray-500">
                        by {order.username || "Guest"}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-blue-600 font-bold text-lg">
                        ${Number(order.total).toFixed(2)}
                      </span>
                      <p className="text-xs text-gray-400">
                        {new Date(order.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
           
                  {order.items &&
                    order.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between text-sm text-gray-600 border-t border-zinc-100 py-1"
                      >
                        <span>{item.product_name}</span>
                        <span>
                          x{item.quantity} — ${Number(item.price).toFixed(2)}
                        </span>
                      </div>
                    ))}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
