import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-100 border-t border-gray-200 mt-10 font-aldrich">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">

        <div>
          <h1 className="text-xl font-bold">Nova Systems</h1>
          <p className="text-sm text-gray-600 mt-2">
            Best PCs, laptops and components for gamers and creators.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Quick Links</h2>
          <Link href="/" className="text-sm text-gray-600 hover:text-black">Home</Link>
          <Link href="/productspage" className="text-sm text-gray-600 hover:text-black">Products</Link>
          <Link href="/cartpage" className="text-sm text-gray-600 hover:text-black">Cart</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Account</h2>
          <Link href="/signpage" className="text-sm text-gray-600 hover:text-black">Login</Link>
          <Link href="/signpage" className="text-sm text-gray-600 hover:text-black">Register</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">Contact</h2>
          <p className="text-sm text-gray-600">Algeria</p>
          <p className="text-sm text-gray-600">support@novasystems.com</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Nova Systems. All rights reserved.
      </div>
    </footer>
  );
}