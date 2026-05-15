import BorderGlow from "../../components/BorderGlow";
import React from "react";
import { Link } from "react-router-dom";

export default function ItemCard({
  title,
  description,
  image,
  creator,
  link,
  tags,
}) {
  return (
    <div className="w-80 hover:cursor-pointer">
      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#120F17"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
        colors={["#c084fc", "#f472b6", "#38bdf8"]}
      >
        <div className="bg-gray-300 rounded-t-[28px] flex justify-center p-4">
          <img src={image} alt={title} className="h-42 w-48 object-contain" />
        </div>
        <div className="p-4">
          <h2 className="text-left text-lg text-white">{title}</h2>
          <h5 className="text-[14px] mb-3 text-left">{creator}</h5>
          <h3 className="text-left text-sm">{description}</h3>

          <div className="flex flex-wrap gap-2 text-[14px] mt-5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 border rounded-2xl bg-gray-700 text-gray-300 text-[12px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="flex justify-end mt-10 text-[16px]">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(link, "_blank", "noopener noreferrer");
              }}
              className="hover:border-b hover:text-white transition-all duration-150 cursor-pointer pb-1"
            >
              Go to Site
            </button>
          </span>
        </div>
      </BorderGlow>
    </div>
  );
}
