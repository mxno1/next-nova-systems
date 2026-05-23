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
      className="w-full h-[35vw] flex justify-center items-center mb-10"
    >
      {/* Div 1 - Best Laptops */}
      <div
        data-aos-once="true"
        data-aos="fade-up"
        className="bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12 border-l border-l-gray-300 border-r border-r-zinc-100 hover:border-r-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-11/12 flex flex-col items-center justify-around transform transition-all duration-500 ">
          <div className="w-10/12 sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem] text-center font-aldrich flex flex-col items-center justify-center gap-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">Best Laptops</h3>
            <p className="text-gray-600">
              Get the best laptops from top brands like ASUS, Dell, HP, and Lenovo. 
              Whether you need a gaming beast or a productivity powerhouse, 
              we have the perfect laptop for your needs.
            </p>
            <p className="text-gray-600 font-semibold mt-2">
              ✓ Latest Intel & AMD processors
            </p>
            <p className="text-gray-600 font-semibold">
              ✓ RTX 40-series graphics available
            </p>
          </div>
        </div>
      </div>

      {/* Div 2 - PC Components & Builds */}
      <div
        data-aos-once="true"
        data-aos="fade-up"
        className="bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12 border-l border-l-zinc-100 border-r border-r-zinc-100 hover:border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-11/12 transform transition-all duration-500 flex flex-col items-center justify-around">
          <div className="w-10/12 sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem] text-center font-aldrich flex flex-col items-center justify-center gap-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800"> Build Your Setup</h3>
            <p className="text-gray-600">
              Customize your dream PC with our premium components. From high-end 
              graphics cards to lightning-fast SSDs, build the ultimate gaming or 
              workstation setup.
            </p>
            <p className="text-gray-600 font-semibold mt-2">
              ✓ Custom PC Builder Tool
            </p>
            <p className="text-gray-600 font-semibold">
              ✓ Expert assembly & cable management
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos-once="true"
        data-aos="fade-up"
        className="bg-linear-to-b from-white via-zinc-100 to-white h-11/12 w-3/12 border-l border-l-zinc-100 border-r border-r-gray-300 hover:border-l-gray-300 transition-all duration-500 flex flex-col items-center justify-around group"
      >
        <div className="w-10/12 h-11/12 flex flex-col items-center justify-around transform transition-all duration-500 ">
          <div className="w-10/12 sm:text-[0.5rem] md:text-[0.7rem] lg:text-[0.9rem] text-center font-aldrich flex flex-col items-center justify-center gap-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800"> Gaming & Peripherals</h3>
            <p className="text-gray-600">
              Complete your setup with mechanical keyboards, high-DPI gaming mice, 
              and immersive headsets. Everything you need for the ultimate gaming experience.
            </p>
            <p className="text-gray-600 font-semibold mt-2">
              ✓ RGB Mechanical Keyboards
            </p>
            <p className="text-gray-600 font-semibold">
              ✓ 240Hz Gaming Monitors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}