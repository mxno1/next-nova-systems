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
      className="w-full h-[35vw]  flex justify-center items-center mb-10"
    >
      <Link
        data-aos-once="true"
        data-aos="fade-up"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12  border-l border-l-gray-300 border-r border-r-zinc-100 hover:border-r-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-11/12  flex flex-col items-center justify-around transform transition-all duration-500 group-hover:scale-x-110 group-hover:scale-y-110">
          <img src="setup1234.png" className="w-150" alt="" />

          <div className="w-10/12  sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem]  text-center font-aldrich flex flex-col items-center justify-center ">
            <p>
              Build your dream PC setup your way, with full control over every
              detail to match your style and performance needs.
            </p>
            <p>
              Choose your components and create a clean, powerful setup for
              gaming, work, or creativity.
            </p>
          </div>
        </div>
      </Link>
      <Link
        data-aos-once="true"
        data-aos="fade-up"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12 border-l border-l-zinc-100 border-r border-r-zinc-100 hover:border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-11/12  transform transition-all duration-500 group-hover:scale-x-110 group-hover:scale-y-108 flex flex-col items-center justify-around">
          <div className="  relative flex items-center justify-center w-full max-w-150">
            <img src="/gpu1.png" className="w-2/6 " alt="" />
            <img
              src="gpumr1.png"
              className="absolute top-[40.4%] left-[41.7%] w-[19%] animate-[spin_3s_linear_infinite] group-hover:animate-spin"
              alt=""
            />
            <img
              src="gpumr1.png"
              className="absolute top-[13.3%] left-[41.6%] w-[19%] animate-[spin_3s_linear_infinite] group-hover:animate-spin"
              alt=""
            />
            <img
              src="gpumr1.png"
              className="absolute top-[67.5%] left-[41.65%] w-[19%] animate-[spin_3s_linear_infinite] group-hover:animate-spin"
              alt=""
            />
          </div>
          <div className="w-10/12  sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem] text-center font-aldrich flex flex-col items-center justify-center ">
            <p>
              Discover top-quality PC parts, from powerful GPUs to reliable
              motherboards, built for performance and stability.
            </p>
            <p>
              Upgrade your setup with the latest hardware for gaming, work, or
              creativity.
            </p>
          </div>
        </div>
      </Link>
      <Link
        data-aos-once="true"
        data-aos="fade-up"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12  border-l border-l-zinc-100 border-r border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-11/12  flex flex-col items-center justify-around transform transition-all duration-500 group-hover:scale-x-110 group-hover:scale-y-108">
          <img src="lap1234.png" className="w-68" alt="" />
          <div className="w-10/12  sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem] t text-center font-aldrich flex flex-col items-center justify-center ">
            <p>
              Get powerful and portable laptops designed for performance, speed,
              and everyday productivity.
            </p>
            <p>
              Whether for gaming, study, or work, choose the perfect laptop that
              fits your needs and lifestyle.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
