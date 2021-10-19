import React from "react";
import HorizontalScrollView from "../../HorizontalScrollView";
import Item from "./Item";

export default function RecommendedMovies({ data }) {
  return (
    <HorizontalScrollView title="Recommended Movies" onClickSeeAll={() => {}}>
      {data?.map((current) => {
        return <Item key={current.alt} {...current} onClick={() => {}} />;
      })}
    </HorizontalScrollView>
  );
}
