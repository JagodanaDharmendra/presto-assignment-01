import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Slider from "../components/homescreen/Slider";
import NewReleases from "../components/homescreen/itemNewReleases/NewReleases";
import IFlixOriginals from "../components/homescreen/itemIFlixOriginals/IFlixOriginals";
import FeaturedMovies from "../components/homescreen/itemFeaturedMovies/FeaturedMovies";
import RecommendedMovies from "../components/homescreen/itemRecommendedMovies/RecommendedMovies";

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
