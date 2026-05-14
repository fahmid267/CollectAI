import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between px-10 py-5 mx-40 my-5">
      <div>CollectAI</div>

      <div className="flex gap-10 px-4 py-2 backdrop-blur-lg rounded-4xl text-white">
        <Link to="/" className="text-sm">Explore</Link>
        <a href="/#news" className="text-sm hover:text-gray-300">News</a>
        <a href="/#featured" className="text-sm hover:text-gray-300">Trending</a>
      </div>

      <div>
        Search Bar
      </div>
    </div>
  )
}
