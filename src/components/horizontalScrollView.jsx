import React from "react";

export default function HorizontalScrollView(props) {
  return (
    <div
      key={props.title}
      className={
        "py-3 " +
        (props.background && props.background === true
          ? "from-white to-gray-300 bg-gradient-to-b"
          : "")
      }
    >
      <div className="px-8">
        <div className="flex flew-row justify-between py-2">
          <div className="font-semibold text-lg text-left align-middle">
            {props.title}
          </div>
          <div
            className=" cursor-pointer font-semibold text-lg text-left align-middle text-blue-600"
            onClick={() => {
              props.onClickSeeAll();
            }}
          >
            See All
          </div>
        </div>
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
