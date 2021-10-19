import React from "react";
import HorizontalScrollView from "../../horizontalScrollView";
import Item from "./item";

export default function IFlixOriginals({ data }) {
  return (
    <HorizontalScrollView title="iFlix Originals">
      {data?.map((current) => {
        return <Item key={current.alt} {...current} onClick={() => {}} />;
      })}
    </HorizontalScrollView>
  );
}
