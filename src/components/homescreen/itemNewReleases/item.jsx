import React from "react";

export default function Item({ src, alt, onClick }) {
  return (
    <div
      className="p-2"
      onClick={() => {
        console.log(`item Clicked with image : ${src}`);
        onClick();
      }}
    >
      <div className="overflow-hidden w-52 h-36 transform hover:scale-105 duration-75">
        <img
          src={src}
          alt={alt}
          className="overflow-hidden object-cover h-full w-full rounded-2xl "
        />
      </div>
    </div>
  );
}
