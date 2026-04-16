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
    <>
      <div
        data-aos-once="true"
        data-aos="fade-up"
        className="w-full sm:h-[30vh] md:h-[45vh] lg:h-[75vh]  flex items-center justify-around mt-28 mb-10 border-b border-t border-gray-200 bg-zinc-100 "
      >
        <div className="w-3/12 h-10/12   flex items-center justify-center relative overflow-visible">
          <svg
            viewBox="0 0 300 200"
            style={{ position: "relative", overflow: "visible", zIndex: "10" }}
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
            </defs>
            <path
              d="M 30 -23 L 122 -28"
              stroke="url(#grad1)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
            <path
              d="M 278 20 L 320 23"
              strokeWidth="0.5"
              stroke="url(#grad2)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <img
            src="/setuppic.png"
            alt=""
            className="absolute w-full object-cover "
          />
        </div>
        <div className="w-5/12 h-10/12 flex flex-col items-center justify-center  ">
          <h3 className="font-aldrich sm:text-sm md:text-md lg:text-xl leading-loose tracking-wide scale-y-90 text-center select-none">
            Extreme power, engineered precision — built for those who push
            limits.
          </h3>

          <p className="font-aldrich sm:text-[6px] md:text-[10px] lg:text-sm leading-relaxed tracking-wide text-center select-none mt-2">
            Nova Systems presents a fully optimized high-performance setup,
            featuring the latest Intel Core i9 processor, paired with the
            cutting-edge RTX 5090 for unmatched speed, responsiveness, and
            visual fidelity.
          </p>

          <p className="font-aldrich sm:text-[6px] md:text-[10px] lg:text-sm leading-relaxed tracking-wide text-center select-none mt-2">
            Built on a premium motherboard with advanced cooling, high-speed
            RAM, and ultra-fast storage, this system is designed to handle
            intensive workloads, gaming, and creative production without
            compromise.
          </p>

          <p className="font-aldrich sm:text-[6px] md:text-[10px] lg:text-sm leading-relaxed tracking-wide text-center select-none mt-2">
            From seamless multitasking to extreme performance under pressure,
            experience a next-level setup crafted for dominance — now available
            in a limited configuration.
          </p>
          <div className="w-full h-12 bg-amber- p-1 sm:m-1 md:m-3  lg:m-10  flex items-center justify-center gap-10">
            <Link
              href="/"
              className="w-2/8 rounded-[5px] font-aldrich  h-full bg-mist-50 flex items-center justify-center border border-zinc-300 hover:bg-white transition duration-300"
            >
              Get
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
