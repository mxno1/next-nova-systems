"use client";
import Link from "next/link";
import Navb from "../components/navb";

export default function signpage() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center">
        <Navb />

        <div className="mt-28 w-full min-h-screen px-4 ">
          
          {/* container */}
          <div className="w-full flex justify-center">
            
            {/* products wrapper */}
            <div className="flex flex-wrap gap-x-16 gap-y-6 justify-center w-full ">

              {/* card */}
              <div className="w-[40rem] h-72 bg-gray-200 rounded-[5px] flex items-center justify-center">
                <div>1</div>
                <div>2</div>
              </div>

              <div className="w-[40rem] h-72 bg-gray-200 rounded-[5px]  flex items-center justify-center">
                <div>1</div>
                <div>2</div>
              </div>

              <div className="w-[40rem] h-72 bg-gray-200 rounded-[5px] flex items-center justify-center">
                <div>1</div>
                <div>2</div>
              </div>

              <div className="w-[40rem] h-72 bg-gray-200 rounded-[5px] flex items-center justify-center">
                <div>1</div>
                <div>2</div>
              </div>

              <div className="w-[40rem] h-72 bg-gray-200 rounded-[5px]  flex items-center justify-center">
                <div>1</div>
                <div>2</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}