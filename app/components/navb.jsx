"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "aos/dist/aos.css";

export default function Navb() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
    }
  };

  return (
    <>
      <div className="w-full h-16 max-w-screen bg-zinc-100 border-b border-gray-200 flex items-center justify-center fixed gap-5 sm:gap-5 md:gap-12 lg:gap-20 z-1000">
        <Link href="/">
          <div className="min-w-1/8 h-full flex items-center">
            <img src="/applogo.png" alt="logo" className="w-30" />
          </div>
        </Link>
        <div className="min-w-2/8 h-full flex items-center justify-center gap-3 sm:gap-5 md:gap-7 lg:gap-10 whitespace-nowrap">
          <Link
            href="/"
            className="text-gray-400 text-[0.9rem] hover:text-gray-950 transition duration-300 font-aldrich"
          >
            Home
          </Link>
          <Link
            href="/productspage"
            className="text-gray-400 text-[0.9rem] hover:text-gray-950 transition duration-300 font-aldrich"
          >
            Products
          </Link>
          <Link
            href="/cartpage"
            className="text-gray-400 text-[0.9rem] hover:text-gray-950 transition duration-300 font-aldrich"
          >
            Cart
          </Link>
          <Link
            href="/aboutpage"
            className="text-gray-400 text-[0.9rem] hover:text-gray-950 transition duration-300 font-aldrich"
          >
            About
          </Link>
        </div>
        <div className="min-w-4/12 h-full flex items-center justify-between">
          <div className="h-7 sm:w-30 md:w-40 lg:w-50 border border-gray-300 rounded-[5px] pl-3 bg-zinc-50">
            <input
              className="w-full h-full border-none outline-none text-gray-600 text-[0.8rem]"
              placeholder="Search for a product"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <div className="w-62 h-7 flex items-center justify-center gap-2">
            <span className="text-gray-400 text-[0.9rem] select-none font-aldrich">
              Join, get the latests
            </span>
            <Link
              href="/signpage"
              className="h-full w-10 rounded-[5px] border border-gray-300 bg-zinc-50 hover:bg-white transition duration-300 flex items-center justify-center"
            >
              <img src="/user.png" className="w-4" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
