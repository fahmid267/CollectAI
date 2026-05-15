import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-5 mx-40 my-5">
      <div className="flex-1 text-white text-xl font-bold">CollectAI</div>

      <div className="flex-1 flex justify-center">
        <div className="flex gap-10 px-6 py-2 backdrop-blur-lg rounded-4xl text-white border border-white/10">
          <a href="/#explore" className="text-sm hover:text-gray-300 transition-colors">Explore</a>
          <a href="/#news" className="text-sm hover:text-gray-300 transition-colors">News</a>
          <a href="/#featured" className="text-sm hover:text-gray-300 transition-colors">Trending</a>
        </div>
      </div>

      <div className="flex-1 flex justify-end">
        <label className="flex items-center gap-2 bg-transparent border border-white/30 rounded-full px-4 py-2 text-white">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-sm placeholder-gray-400 w-40" placeholder="Search" />
        </label>
      </div>
    </div>
  )
}
