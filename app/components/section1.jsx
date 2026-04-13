"use client";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Section1() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="w-full h-[35vw]  flex justify-center items-center"
    >
      <Link
        data-aos="fade-up"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-50 to-white h-11/12 w-3/12  border-l border-l-gray-300 border-r border-r-white hover:border-r-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-8/12  flex items-center justify-center transform transition-all duration-500 group-hover:scale-x-110 group-hover:scale-y-110">
          <div className="w-full    flex items-center justify-center transform transition-all duration-500 group-hover:scale-x-115 group-hover:scale-y-110">
            <img src="setup1234.png" alt="" />
          </div>
        </div>
        <div className="w-10/12 h-2/12 sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem]  text-center font-aldrich flex flex-col items-center justify-center  transform transition-all duration-500 group-hover:scale-x-120 group-hover:scale-y-110">
          <p>
            Build your dream PC setup your way, with full control over every
            detail to match your style and performance needs.
          </p>
          <p>
            Choose your components and create a clean, powerful setup for
            gaming, work, or creativity.
          </p>
        </div>
      </Link>
      <Link
        data-aos="fade-up"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-50 to-white h-11/12 w-3/12 border-l border-l-white border-r border-r-white hover:border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-8/12  transform transition-all duration-500 group-hover:scale-x-120 group-hover:scale-y-115 flex items-center justify-center">
          <div className=" relative flex items-center justify-center w-full max-w-125">
            <img src="/gpu1.png" className="w-2/6 " alt="" />
            <img
              src="gpumr1.png"
              className="absolute top-[40.4%] left-[41.7%] w-[19%] animate-[spin_3s_linear_infinite] group-hover:animate-spin"
              alt=""
            />
            <img
              src="gpumr1.png"
              className="absolute top-[13.2%] left-[41.6%] w-[19%] animate-[spin_3s_linear_infinite] group-hover:animate-spin"
              alt=""
            />
            <img
              src="gpumr1.png"
              className="absolute top-[67.5%] left-[41.6%] w-[19%] animate-[spin_3s_linear_infinite] group-hover:animate-spin"
              alt=""
            />
          </div>
        </div>
        <div className="w-10/12 h-2/12 sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem] text-center font-aldrich flex flex-col items-center justify-center transform transition-all duration-500 group-hover:scale-x-120 group-hover:scale-y-110">
          <p>
            Discover top-quality PC parts, from powerful GPUs to reliable
            motherboards, built for performance and stability.
          </p>
          <p>
            Upgrade your setup with the latest hardware for gaming, work, or
            creativity.
          </p>
        </div>
      </Link>
      <Link
        data-aos="fade-up"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-50 to-white h-11/12 w-3/12  border-l border-l-white border-r border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-8/12  flex items-center justify-center transform transition-all duration-500 group-hover:scale-x-115 group-hover:scale-y-110">
          <img src="lap1234.png" alt="" />
        </div>
        <div className="w-10/12 h-2/12 sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem] text-center font-aldrich flex flex-col items-center justify-center transform  transition-all duration-500 group-hover:scale-x-120 group-hover:scale-y-110">
          <p>
            Discover powerful and portable laptops designed for performance,
            speed, and everyday productivity.
          </p>
          <p>
            Whether for gaming, study, or work, choose the perfect laptop that
            fits your needs and lifestyle.
          </p>
        </div>
      </Link>
    </div>
  );
}
