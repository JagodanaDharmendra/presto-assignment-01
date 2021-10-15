import React from "react";

export default function Item(props) {
  return (
    <div
      className="p-2 max-w-[240px] w-64 mr-4"
      onClick={() => {
        console.log(`item Clicked with image : ${props.src}`);
        props.onClick();
      }}
    >
      <div className="grid grid-row-2 gap-4 items-center">
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
          <div className=" text-left m-full text-xs opacity-70">
            {props.desc.substr(1, 110) + "..."}
          </div>
        </div>
      </div>
    </div>
  );
}
