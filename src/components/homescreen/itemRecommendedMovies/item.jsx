import React from "react";

export default function Item(props) {
  return (
    <div
      key={props.src}
      className="p-2 mr-4 w-64 md:w-112"
      onClick={() => {
        console.log(`item Clicked with image : ${props.src}`);
        props.onClick();
      }}
    >
      <div className="w-full grid grid-rows-2 md:grid-rows-none grid-cols-none md:grid-cols-2 gap-2 items-center">
        <div className="overflow-hidden w-60 h-36 transform hover:scale-105 duration-75">
          <img
            src={props.src}
            alt={props.alt}
            className="overflow-hidden object-cover h-full w-full rounded-2xl "
          />
        </div>
        <div className="space-y-2">
          <div className="font-normal text-xxs leading-none tracking-wider uppercase text-gray-500">
            {props.tag}
          </div>
          <div className=" font-semibold text-sm leading-none ">
            {props.title}
          </div>
          <div className="text-left m-full text-xs opacity-70">
            {props.desc.substr(1, 110) + "..."}
          </div>
        </div>
      </div>
    </div>
  );
}
