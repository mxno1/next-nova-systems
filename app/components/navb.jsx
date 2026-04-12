"use client";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Navb() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div  data-aos="fade" className="w-full h-16 max-w-screen bg-zinc-50  border-b  border-gray-200 flex items-center justify-center fixed gap-5 sm:gap-5 md:gap-12 lg:gap-20 z-1000">
        <Link href="/">
          <div className="min-w-1/8 h-full  flex items-center ">
            <img src="/applogo.png" alt="logo" className="w-30" />
          </div>
        </Link>
        <div className="min-w-2/8 h-full flex items-center justify-center gap-3 sm:gap-5 md:gap-7 lg:gap-10 whitespace-nowrap">
          <Link
            href="/signpage"
            className="text-gray-400 text-[0.9rem] hover:text-gray-950 transition duration-300 font-aldrich"
          >
            Home
          </Link>
          <Link
            href="/signpage"
            className="text-gray-400 text-[0.9rem] hover:text-gray-950 transition duration-300 font-aldrich"
          >
            Shop
          </Link>
          <Link
            href="/signpage"
            className="text-gray-400 text-[0.9rem] hover:text-gray-950 transition duration-300 font-aldrich"
          >
            Catigories
          </Link>
          <Link
            href="/signpage"
            className="text-gray-400 text-[0.9rem] hover:text-gray-950 transition duration-300 font-aldrich"
          >
            More
          </Link>
          <Link
            href="/signpage"
            className="text-gray-400 text-[0.9rem] hover:text-gray-950 transition duration-300 font-aldrich"
          >
            About
          </Link>
        </div>
        <div className="min-w-4/12 h-full flex items-center justify-between">
          <div className="h-7 sm:w-30 md:w-40 lg:w-50 border border-gray-200 rounded-[5px] pl-3 bg-gray-100 ">
            <input
              className="w-full h-full border-none outline-none text-gray-600 text-[0.8rem] "
              placeholder="Search for a product"
              type="text"
            />
          </div>
          <div className="w-62 h-7 flex items-center justify-center gap-2">
            <span className="text-gray-400 text-[0.9rem] select-none font-aldrich">
              Join, get the latests
            </span>
            <Link
              href="/signpage"
              className="h-full w-14  rounded-[5px] border border-gray-200 bg-zinc-50 hover:bg-zinc-100 transition duration-300 flex items-center justify-center"
            >
              <img src="/user.png" className="w-4 " alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
