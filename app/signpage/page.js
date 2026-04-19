"use client";
import Link from "next/link";
import Navb from "../components/navb";
import { useState } from "react";

export default function signpage() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center font-aldrich">
        <Navb />

        <div className="w-full sm:h-[30vh] md:h-[45vh] lg:h-[75vh] flex items-center justify-center mt-28 mb-10 border-b border-t border-gray-200 bg-zinc-100  gap-10">
          {show && (
            <div className="w-130 p-10 border overflow-hidden border-zinc-400 rounded-xl shadow-md flex flex-col gap-4">
              <h2 className="text-xl font-bold text-center">Sign In</h2>
              <input
                type="text"
                placeholder="Username"
                className="p-2 border  border-zinc-400  rounded-md outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 border  border-zinc-400  rounded-md outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="p-2 border  border-zinc-400  rounded-md outline-none"
              />
              <p>
                Doesn't have an account?
                <button
                  onClick={(e) => {
                    setShow(false);
                  }}
                  className="border-none hover:text-gray-500 transition duration-200 m-1"
                >
                  sign up
                </button>
              </p>

              <button className="bg-black text-white py-2 rounded-md">
                Login
              </button>
            </div>
          )}

          {!show && (
            <div className="w-130 p-10 border border-zinc-400 rounded-xl shadow-md flex flex-col gap-4">
              <h2 className="text-xl font-bold text-center">Sign Up</h2>
              <input
                type="text"
                placeholder="Username"
                className="p-2 border  border-zinc-400  rounded-md outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="p-2 border rounded-md  border-zinc-400 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="p-2 border rounded-md  border-zinc-400 outline-none"
              />
              <p>
                already have an account?
                <button
                  onClick={(e) => {
                    setShow(true);
                  }}
                  className="border-none hover:text-gray-500 transition duration-200 m-1"
                >
                  sign in
                </button>
              </p>

              <button className="bg-olive-600 text-white py-2 rounded-md">
                Create Account
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
