import React from "react";
import HorizontalScrollView from "../../horizontalScrollView";
import Item from "./item";

export default function FeaturedMovies({ data }) {
  return (
    <HorizontalScrollView title="Featured Movies" background>
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
