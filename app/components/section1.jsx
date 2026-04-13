"use client";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Section1() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="w-full h-[40vw]  flex justify-center items-center"
    > <Link href="/signpage" className="h-11/12 w-3/12  border-l border-l-gray-300 border-r border-r-white hover:border-r-gray-300 transition-all duration-500 flex flex-col items-center justify-around group">
      
        <div className="w-10/12 h-8/12  flex items-center justify-center transform transition-all duration-500 group-hover:scale-x-110 group-hover:scale-y-110">
          <div className="w-full    flex items-center justify-center transform transition-all duration-500 group-hover:scale-x-115 group-hover:scale-y-110">
            <img src="setup1234.png" alt="" />
          </div>
        </div>
        <div className="w-10/12 h-2/12 sm:text-sm md:text-md lg:text-xl  text-center font-aldrich flex flex-col items-center justify-center  transform transition-all duration-500 group-hover:scale-x-120 group-hover:scale-y-110">
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            veniam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate, asperiores!
          </p>
        </div>
      
      </Link>
      <Link href="/signpage" className="h-11/12 w-3/12 border-l border-l-white border-r border-r-white hover:border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group">
      
        <div className="w-10/12 h-8/12  transform transition-all duration-500 group-hover:scale-x-120 group-hover:scale-y-115 flex items-center justify-center">
          <div className=" relative flex items-center justify-center w-full max-w-125">
            <img src="/gpu1.png" className="w-5/12 " alt="" />
            <img
              src="gpumr1.png"
              className="absolute top-[40.8%] left-[40%] w-[23%] animate-[spin_3s_linear_infinite] group-hover:animate-spin"
              alt=""
            />
            <img
              src="gpumr1.png"
              className="absolute top-[13.5%] left-[39.8%] w-[23%] animate-[spin_3s_linear_infinite] group-hover:animate-spin"
              alt=""
            />
            <img
              src="gpumr1.png"
              className="absolute top-[67.9%] left-[39.9%] w-[23%] animate-[spin_3s_linear_infinite] group-hover:animate-spin"
              alt=""
            />
          </div>
        </div>
        <div className="w-10/12 h-2/12 sm:text-sm md:text-md lg:text-xl  text-center font-aldrich flex flex-col items-center justify-center transform transition-all duration-500 group-hover:scale-x-120 group-hover:scale-y-110">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            veniam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate, asperiores!
          </p>
        </div>
      
      </Link>
      <Link href="/signpage" className="h-11/12 w-3/12   border-l border-l-white border-r border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group">
      
        <div className="w-10/12 h-8/12  flex items-center justify-center transform transition-all duration-500 group-hover:scale-x-115 group-hover:scale-y-110">
          <img src="lap1234.png" alt="" />
        </div>
        <div className="w-10/12 h-2/12 sm:text-sm md:text-md lg:text-xl  text-center font-aldrich flex flex-col items-center justify-center transform  transition-all duration-500 group-hover:scale-x-120 group-hover:scale-y-110">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            veniam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate, asperiores!
          </p>
        </div>
      </Link>
    </div>
  );
}
