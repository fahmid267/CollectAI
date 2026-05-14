import Masonry from "../../components/Masonry";
import React from "react";

export default function Category({ items }) {
  return (
    <div className="w-5xl">
      <Masonry
      items={items}
      ease="power3.out"
      duration={0.6}
      stagger={0.05}
      animateFrom="bottom"
      scaleOnHover
      hoverScale={0.95}
      blurToFocus
      colorShiftOnHover={false}
    />
    </div>
  );
}
