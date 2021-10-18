import React from "react";
import HorizontalScrollView from "../../horizontalScrollView";
import Item from "./item";

export default function RecommendedMovies({ data }) {
  return (
    <HorizontalScrollView title="Recommended Movies" onClickSeeAll={() => {}}>
      {data?.map((current) => {
        return <Item {...current} onClick={() => {}} />;
      })}
    </HorizontalScrollView>
  );
}
