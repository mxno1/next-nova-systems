"use client";
import Navb from "../components/navb";

export default function SignPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center font-aldrich">
      <Navb />

      <div className="w-full sm:h-[30vh] md:h-[45vh] lg:h-[75vh] flex items-center justify-around mt-28 mb-10 border-b border-t border-gray-200 bg-zinc-100 px-6">
      
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-wide mb-4">
            NOVA SYSTEMS
          </h1>

          <p className="text-gray-600 mb-6">
            Precision technology, refined performance — built for those who
            expect more.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Nova Systems is your destination for high-performance laptops,
            custom PCs, and premium computer components. We combine clean design
            with powerful hardware to elevate your workflow, gaming, and
            creative projects.
          </p>
        </div>

      
        <div className="hidden md:flex w-[40%] h-[70%] bg-white shadow-lg rounded-xl border border-gray-200 items-center justify-center p-6">
          <p className="text-gray-500 text-center">
            High-end laptops
            <br />
            Custom-built PCs
            <br />
            Premium PC parts
          </p>
        </div>
      </div>
    </div>
  );
}
