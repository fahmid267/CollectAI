import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { tools } from "../data/tools.js";

export default function ToolPage() {
  const { toolName } = useParams();

  // Find the tool. Decode URL param just in case.
  const tool = tools.find((t) => t.title.toLowerCase() === decodeURIComponent(toolName).toLowerCase());

  if (!tool) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-40 px-30 mb-20">
      <div className="flex justify-start items-center">
        <div className="bg-gray-300 p-8 rounded-3xl flex items-center justify-center">
          <img src={tool.image} alt={tool.title} className="w-64 h-48 object-contain drop-shadow-2xl" />
        </div>

        <div className="flex flex-col justify-start items-start ml-10">
          <h1 className="font-bold text-4xl text-white mb-2">{tool.title}</h1>
          <p className="text-gray-400 text-lg mb-6">by {tool.creator}</p>

          <p className="mb-4">{tool.description}</p>

          <div className="flex items-center gap-2">
            <h3>Best For:</h3>
            <div className="flex gap-4">
              {tool.bestFor.map((bestFor, index) => (
                <span key={index} className="rounded-2xl px-2 py-0.5 text-white bg-gray-800 text-[14px] border">{bestFor}</span>
              ))}
            </div>
          </div>

          {/* star rating section */}

          <button className="rounded-3xl w-48 h-12 px-2 py-1 text-white bg-gray-700 hover:bg-gray-600 transition-all duration-200 ease-in-out mt-5 cursor-pointer">Go to Site</button>

        </div>
      </div>
    </div>
  );
}
