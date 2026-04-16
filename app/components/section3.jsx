"use client";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function Section3() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
      className="w-full h-[35vw]  flex justify-center items-center mb-10"
    >
      <div
        data-aos-once="true"
        data-aos="fade-up"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12  border-l border-l-gray-300 border-r border-r-zinc-100 hover:border-r-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-11/12  flex flex-col items-center justify-around transform transition-all duration-500 group-hover:scale-x-110 group-hover:scale-y-110">
          

          <div className="w-10/12  sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem]  text-center font-aldrich flex flex-col items-center justify-center ">
            
          </div>
        </div>
      </div>
      <div
        data-aos-once="true"
        data-aos="fade-up"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12 border-l border-l-zinc-100 border-r border-r-zinc-100 hover:border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-11/12  transform transition-all duration-500 group-hover:scale-x-120 group-hover:scale-y-115 flex flex-col items-center justify-around">
          <div className="  relative flex items-center justify-center w-full max-w-150">
            
            
          </div>
          <div className="w-10/12  sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem] text-center font-aldrich flex flex-col items-center justify-center ">
           
          </div>
        </div>
      </div>
      <div
        data-aos-once="true"
        data-aos="fade-up"
        href="/signpage"
        className=" bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12  border-l border-l-zinc-100 border-r border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-11/12  flex flex-col items-center justify-around transform transition-all duration-500 group-hover:scale-x-115 group-hover:scale-y-110">
         
          <div className="w-10/12  sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem] t text-center font-aldrich flex flex-col items-center justify-center ">
            
          </div>
        </div>
      </div>
    </div>
  );
}
