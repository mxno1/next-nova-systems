"use client";
import { useRouter } from "next/navigation";
import Navb from "../components/navb";
import { useState, useEffect } from "react";

export default function SignPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("storage"));
    setUser(null);
  };

  const [signupData, setSignupData] = useState({ username: "", email: "", password: "" });
  const [signinData, setSigninData] = useState({ email: "", password: "" });

  async function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setShow(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSignIn(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signinData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("storage"));
      setUser(data.user);

      if (data.user.role === "admin") router.push("/adminpage");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center font-aldrich">
      <Navb />

      <div className="w-full sm:h-[30vh] md:h-[45vh] lg:h-[75vh] flex items-center justify-center mt-28 mb-10 border-b border-t border-gray-200 bg-zinc-100 gap-10">

        {user ? (
          <div className="flex flex-col items-center gap-6 p-10 border border-zinc-400 rounded-xl shadow-md bg-white">
            <p className="text-lg font-bold text-gray-800">
              Welcome, <span className="text-gray-600">{user.username}</span> 
            </p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <button
              onClick={handleSignOut}
              className="px-8 py-2 bg-black text-white rounded-md hover:bg-zinc-800 transition duration-200 font-semibold"
            >
              Sign Out
            </button>
          </div>

        ) : (
          <>
            {error && (
              <div className="absolute top-24 bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded-md text-sm">
                {error}
              </div>
            )}

            {show && (
              <div className="w-130 p-10 border overflow-hidden border-zinc-400 rounded-xl shadow-md flex flex-col gap-4">
                <h2 className="text-xl font-bold text-center">Sign In</h2>
                <input type="email" placeholder="Email"
                  className="p-2 border border-zinc-400 rounded-md outline-none"
                  value={signinData.email}
                  onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
                />
                <input type="password" placeholder="Password"
                  className="p-2 border border-zinc-400 rounded-md outline-none"
                  value={signinData.password}
                  onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
                />
                <p>
                  Don&apos;t have an account?
                  <button onClick={() => { setShow(false); setError(""); }}
                    className="border-none hover:text-gray-500 transition duration-200 m-1">
                    Sign up
                  </button>
                </p>
                <button onClick={handleSignIn} disabled={loading}
                  className="bg-black text-white py-2 rounded-md hover:bg-zinc-800 transition duration-200 disabled:opacity-50">
                  {loading ? "Signing in..." : "Login"}
                </button>
              </div>
            )}
            
            {!show && (
              <div className="w-130 p-10 border border-zinc-400 rounded-xl shadow-md flex flex-col gap-4">
                <h2 className="text-xl font-bold text-center">Sign Up</h2>
                <input type="text" placeholder="Username"
                  className="p-2 border border-zinc-400 rounded-md outline-none"
                  value={signupData.username}
                  onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                />
                <input type="email" placeholder="Email"
                  className="p-2 border rounded-md border-zinc-400 outline-none"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                />
                <input type="password" placeholder="Password"
                  className="p-2 border rounded-md border-zinc-400 outline-none"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                />
                <p>
                  Already have an account?
                  <button onClick={() => { setShow(true); setError(""); }}
                    className="border-none hover:text-gray-500 transition duration-200 m-1">
                    Sign in
                  </button>
                </p>
                <button onClick={handleSignUp} disabled={loading}
                  className="bg-black text-white py-2 rounded-md hover:bg-zinc-800 transition duration-200 disabled:opacity-50">
                  {loading ? "Creating account..." : "Create Account"}
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}