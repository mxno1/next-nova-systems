"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navb from "../components/navb";
import { useCart } from "../context/CartContext";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!q) return;
    setLoading(true);
    fetch(`http://localhost:5000/api/products/search?q=${encodeURIComponent(q)}`)
      .then((r) => r.json())
      .then((d) => {
        setProducts(d.success ? d.products : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [q]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
      <Navb />
      <div className="mt-28 w-full px-6 pb-12">

        <h1 className="text-2xl font-bold text-center mb-10 text-gray-800 font-aldrich">
          Results for: <span >" {q} "</span>
        </h1>

        {loading && (
          <div className="flex justify-center items-center h-48">
            <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!loading && (
          <div className="w-full flex justify-center">
            <div className="flex flex-col gap-y-6 w-full max-w-[50rem]">
              {products.length === 0 ? (
                <p className="text-gray-400 text-lg text-center">No products found for "{q}"</p>
              ) : (
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (product.stock === 0) return;
    fetch(`http://localhost:5000/api/products/${product.id}/decrease-stock`, { method: "PUT" });
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="w-full h-72 bg-zinc-100 rounded-[5px] flex overflow-hidden font-aldrich">
      <div className="w-82 h-full flex items-center justify-center  bg-zinc-100 ">
        {product.image ? (
          <img
            src={
              product.image?.startsWith("http")
                ? product.image
                : `http://localhost:5000/uploads/${product.image}`
            }
            alt={product.name}
            className="w-[74%] h-[55%] "
          />
        ) : (
          <div className="w-[74%] h-[55%] flex items-center justify-center text-gray-400 text-6xl"></div>
        )}
      </div>
      <div className="flex flex-col justify-between p-6 flex-1">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-gray-600">${Number(product.price).toFixed(2)}</span>
            <span className={`text-xs font-medium px-2 py-1 rounded-full w-fit ${
              product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-500"
            }`}>
              {product.stock > 0 ? `In stock (${product.stock})` : "Out of stock"}
            </span>
          </div>
          <button onClick={handleAddToCart} disabled={product.stock === 0}
            className={`px-6 py-2.5 rounded-lg  font-semibold transition-all duration-200 ${
              product.stock === 0 ? "bg-gray-300 cursor-not-allowed"
              : added ? "bg-green-500"
              : "bg-zinc-300 hover:bg-white active:scale-95"
            }`}>
            {added ? " Added!" : " Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}