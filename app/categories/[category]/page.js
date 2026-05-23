"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navb from "../../components/navb";
import { useCart } from "../../context/CartContext";

const categoryTitles = {
  laptop: " Laptops",
  component: " PC Components",
  setup: " Pre-built Setups",
};

export default function CategoriesPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost:5000/api/products/category/${category}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.success) setProducts(d.products);
        else setError("Failed to load products");
        setLoading(false);
      })
      .catch(() => {
        setError("Could not connect to server");
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
      <Navb />
      <div className="mt-28 w-full px-6 pb-12">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          {categoryTitles[category] || "Products"}
        </h1>

        {loading && (
          <div className="flex justify-center items-center h-48">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 text-lg">{error}</div>
        )}

        {!loading && !error && (
          <div className="w-full flex justify-center">
            <div className="flex flex-col gap-y-6 w-full max-w-[50rem]">
              {products.length === 0 ? (
                <p className="text-gray-500 text-lg text-center">
                  No products in this category
                </p>
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
    fetch(`http://localhost:5000/api/products/${product.id}/decrease-stock`, {
      method: "PUT",
    });
    addToCart(product);
    setAdded(true);
    setTimeout(() => router.push("/cartpage"), 600);
  };

  return (
    <div className="w-full h-72 bg-zinc-100 rounded-[5px] flex overflow-hidden font-aldrich text-black">
      {/* LEFT — Image */}
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

      {/* RIGHT — Info */}
      <div className="flex flex-col justify-between p-6 flex-1">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-gray-600">
              ${Number(product.price).toFixed(2)}
            </span>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full w-fit ${
                product.stock > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-500"
              }`}
            >
              {product.stock > 0
                ? `In stock (${product.stock})`
                : "Out of stock"}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`px-6 py-2.5 rounded-lg  font-semibold transition-all duration-300 ${
              product.stock === 0
                ? "bg-gray-300 cursor-not-allowed"
                : added
                  ? "bg-gray-400"
                  : "bg-gray-200 hover:bg-white active:scale-95"
            }`}
          >
            {added ? " Added!" : " Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
