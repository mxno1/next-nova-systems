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
      className="w-full h-[70vh]  flex justify-center items-center"
    >
      <div className="h-11/12 w-3/12  border-l border-l-gray-300 border-r border-r-white  hover:border-r-gray-300  transition duration-400"></div>
      <div className="h-11/12 w-3/12 border-l border-r border-l-white border-r-white hover:border-r-gray-300 hover:border-l-gray-300 transition duration-400 "></div>
      <div className="h-11/12 w-3/12 border-r border-r-gray-300  border-l border-l-white  hover:border-l-gray-300  transition duration-400"></div>
    </div>
  );
}
