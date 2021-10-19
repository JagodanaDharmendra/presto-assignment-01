import React from "react";
import HorizontalScrollView from "../../horizontalScrollView";
import Item from "./item";

export default function NewReleases({ data }) {
  return (
    <HorizontalScrollView title="New Releases" background>
      {data?.map((current) => {
        return (
          <Item
            key={current.alt}
            src={current.src}
            alt={current.alt}
            onClick={() => {}}
          />
        );
      })}
    </HorizontalScrollView>
  );
}
