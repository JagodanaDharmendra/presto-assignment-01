import React from "react";

export default function HorizontalScrollView(props) {
  return (
    <div
      className={
        "py-3 " +
        (props.background && props.background == true
          ? "from-white to-gray-300 bg-gradient-to-b"
          : "")
      }
    >
      <div className="px-8">
        <h2 className="font-semibold text-lg text-left align-middle">
          {props.title}
        </h2>
      </div>
      <div>
        <div className="flex overflow-x-scroll scrollbar-none no-scrollbar bg-transparent">
          <div className="px-6 flex flex-nowrap bg-transparent">
            {props.children}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
