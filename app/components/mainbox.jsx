"use client";
import Link from "next/link";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="w-full sm:h-[30vh] md:h-[45vh] lg:h-[75vh]  flex items-center justify-around mt-28 mb-10 border-b border-t border-gray-200 bg-zinc-100 "
      >
        <div className="w-5/12 h-10/12 flex flex-col items-center  ">
          <h1 className="font-aldrich sm:text-2xl md:text-4xl lg:text-5xl leading-loose tracking-wide scale-y-75 ">
            NOVA SYSTEMS
          </h1>
          <h3 className="font-aldrich  sm:text-sm md:text-md lg:text-xl leading-loose tracking-wide scale-y-75 text-center  select-none ">
            Precision technology, refined performance — built for those who
            expect more.
          </h3>
          <p className="font-aldrich  sm:text-[6px] md:text-[10px] lg:text-sm leading-loose tracking-wide  text-center  select-none">
            Nova Systems delivers a curated selection of high-end laptops and
            components, combining clean design with serious power to elevate
            your everyday workflow and creative projects.
          </p>
          <p className="font-aldrich sm:text-[6px] md:text-[10px] lg:text-sm leading-loose tracking-wide text-center  select-none ">
            Now featuring the new ASUS Zenbook — ultra-light, incredibly fast,
            and crafted for elegance. Experience next-level performance with a
            limited-time exclusive offer.
          </p>
          <div className="w-full h-12 bg-amber- p-1 sm:m-1 md:m-3  lg:m-10  flex items-center justify-center gap-10">
            <Link
              href="/"
              className="w-2/8 rounded-[5px] font-aldrich  h-full bg-mist-50 flex items-center justify-center border border-zinc-300 hover:bg-white transition duration-300"
            >
              Pre-order
            </Link>
            <Link
              href="/"
              className="w-1/8 rounded-[5px] font-aldrich h-full bg-mist-50 flex items-center justify-center border border-mist-50 hover:border-zinc-300 hover:bg-white transition duration-300 "
            >
              more
            </Link>
          </div>
        </div>
        <div className="w-4/12 h-10/12   flex items-center justify-center relative overflow-visible">
          <svg
            viewBox="0 0 300 200"
            style={{ position: "relative", overflow: "visible" }}
            className="w-full h-auto"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(96.7% 0.001 286.375)" />
                <stop offset="25%" stopColor="#c1e0e7" />
                <stop offset="50%" stopColor="#00c9e3" />
                <stop offset="75%" stopColor="#c1e0e7" />
                <stop offset="100%" stopColor="oklch(96.7% 0.001 286.375)" />

                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  from="1 0"
                  to="-1 0"
                  dur="1.5s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(96.7% 0.001 286.375)" />
                <stop offset="25%" stopColor="#676767" />
                <stop offset="50%" stopColor="#000000" />
                <stop offset="75%" stopColor="#676767" />
                <stop offset="100%" stopColor="oklch(96.7% 0.001 286.375)" />

                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  from="-1 0"
                  to="1 0"
                  dur="1.5s"
                  begin="1.5s"
                  repeatCount="indefinite"
                />
              </linearGradient>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(96.7% 0.001 286.375)" />
                <stop offset="25%" stopColor="#f0e5a8" />
                <stop offset="50%" stopColor="#ffcc00" />
                <stop offset="75%" stopColor="#f0e5a8" />
                <stop offset="100%" stopColor="oklch(96.7% 0.001 286.375)" />

                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  from="1 0"
                  to="-1 0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </linearGradient>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(96.7% 0.001 286.375)" />
                <stop offset="25%" stopColor="#a2ebdb" />
                <stop offset="50%" stopColor="#05f2bf" />
                <stop offset="75%" stopColor="#a2ebdb" />
                <stop offset="100%" stopColor="oklch(96.7% 0.001 286.375)" />

                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  from="1 0"
                  to="-1 0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </linearGradient>
              <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(96.7% 0.001 286.375)" />
                <stop offset="25%" stopColor="#f28fb2" />
                <stop offset="50%" stopColor="#ff0059" />
                <stop offset="75%" stopColor="#f28fb2" />
                <stop offset="100%" stopColor="oklch(96.7% 0.001 286.375)" />

                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  from="1 0"
                  to="-1 0"
                  dur="1.5s"
                  begin="2.4s"
                  repeatCount="indefinite"
                />
              </linearGradient>
              <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="oklch(96.7% 0.001 286.375)" />
                <stop offset="25%" stopColor="#f28fb2" />
                <stop offset="50%" stopColor="#ff0059" />
                <stop offset="75%" stopColor="#f28fb2" />
                <stop offset="100%" stopColor="oklch(96.7% 0.001 286.375)" />

                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  from="-1 0"
                  to="1 0"
                  dur="1.5s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>
            <path
              d="M 240 154 L 305 165"
              stroke="url(#grad1)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.5"
            />
            <path
              d="M 278 20 L 320 23"
              strokeWidth="0.5"
              stroke="url(#grad2)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 278 20 L 286 -25"
              strokeWidth="0.5"
              stroke="url(#grad3)"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 170 191 L 240 206"
              strokeWidth="0.5"
              stroke="url(#grad4)"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 170 191 L 118 214"
              strokeWidth="0.5"
              stroke="url(#grad5)"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 10 151 L -40 168"
              strokeWidth="0.5"
              stroke="url(#grad2)"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 8 153 L -35 144"
              strokeWidth="0.5"
              stroke="url(#grad3)"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 95 126 L 48 118"
              strokeWidth="0.5"
              stroke="url(#grad1)"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 120 11 L 72 8"
              strokeWidth="0.5"
              stroke="url(#grad4)"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M 118 11 L 125 -28"
              strokeWidth="0.5"
              stroke="url(#grad6)"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          <img
            src="/asus1.png"
            alt=""
            className="absolute w-full object-cover "
          />
        </div>
      </div>
    </>
  );
}
