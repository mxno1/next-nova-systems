"use client";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Section2() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="w-full h-[35vw] border-b border-t border-gray-200 bg-zinc-100  flex justify-center items-center">
      <Link
        data-aos="fade-up"
        data-aos-once="true"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12  border-l border-l-gray-300 border-r border-r-zinc-100 hover:border-r-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        jno
      </Link>
      <Link
        data-aos="fade-up"
        data-aos-once="true"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12 border-l border-l-zinc-100 border-r border-r-zinc-100 hover:border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        lknljb
      </Link>
      <Link
        data-aos="fade-up"
        data-aos-once="true"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12  border-l border-l-zinc-100 border-r border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        b k
      </Link>
    </div>
  );
}
