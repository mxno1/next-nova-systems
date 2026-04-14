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
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="w-full h-[35vw] border-b border-t border-gray-200 bg-zinc-100  flex justify-center items-center"
    >
      
    </div>
  );
}
