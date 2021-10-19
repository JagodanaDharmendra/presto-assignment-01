import React from "react";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Slider from "../components/homescreen/slider";
import NewReleases from "../components/homescreen/itemNewReleases/newReleases";
import IFlixOriginals from "../components/homescreen/itemIFlixOriginals/iFlixOriginals";
import FeaturedMovies from "../components/homescreen/itemFeaturedMovies/featuredMovies";
import RecommendedMovies from "../components/homescreen/itemRecommendedMovies/recommendedMovies";

export default function Home({
  sliderData,
  newReleasesData,
  featuredMoviesData,
  moviesData,
}) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <Slider data={sliderData} />
        <NewReleases data={newReleasesData} />
        <IFlixOriginals data={moviesData} />
        <hr className="my-4 mx-8" />
        <FeaturedMovies data={featuredMoviesData} />
        <Slider data={sliderData.slice(0, 1)} />
        <RecommendedMovies data={moviesData} />
      </main>
      <Footer />
    </div>
  );
}
