import React from "react";
import "./styles/output.css";
import "antd/dist/antd.css";

import { connect } from "react-redux";

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/counter/counter.actions";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Slider from "./components/homescreen/slider";
import NewReleases from "./components/homescreen/itemNewReleases/newReleases";
import IFlixOriginals from "./components/homescreen/itemIFlixOriginals/iFlixOriginals";
import FeaturedMovies from "./components/homescreen/itemFeaturedMovies/featuredMovies";
import RecommendedMovies from "./components/homescreen/itemRecommendedMovies/recommendedMovies";

const sliderData = [
  {
    src: "./images/banner1.jpg",
    alt: "Beach image from top",
  },
  {
    src: "./images/banner2.jpg",
    alt: "Flesta bull shit poster wall",
  },
];

const featuredMoviesData = [{
  id: "movie-jest",
  src: "./images/movies/img-boat.jpeg",
  alt: "Jest movie poster",
},];

const newReleasesData = [
  {
    id: "movie-jest",
    src: "./images/movies/img-jest.png",
    alt: "Jest movie poster",
  },
  {
    id: "movie-harry-potter",
    src: "./images/movies/img-herry-potter.jpeg",
    alt: "Harry potter movie poster",
  },
  {
    id: "movie-baarish",
    src: "./images/movies/img-baarish.jpeg",
    alt: "Baarish movie poster",
  },
  {
    id: "movie-chale-aana",
    src: "./images/movies/img-chale-aana.jpeg",
    alt: "Chale aana movie poster",
  },
  {
    id: "movie-ranjha",
    src: "./images/movies/img-ranjha.jpeg",
    alt: "Ranjha movie poster",
  },
  {
    id: "movie-try-again",
    src: "./images/movies/img-try-again.jpeg",
    alt: "Try again movie poster",
  },
];


const moviesData = [
  {
    id: "movie-jest",
    src: "./images/movies/img-boat.jpeg",
    alt: "Jest movie poster",
    tag: "Imaginary",
    title: "Top 10 Most Beautiful Places In The World Top",
    desc: `Top 10 Most Beautiful Places In The World. Subscribe http://goo.gl/Q2kKrD More incredible around-the-world content & awesome travel pics on Getty Images http://www.gettyimages.com/travel

    The most beautiful travel destinations on planet earth, these are places from all around the globe that will take your breath away. WatchMojo presents the top 10 most beautiful places in the world. But what will make the top spot on our list?  Iguazú Falls, Salar de Uyuni or Moraine Lake? Watch to find out!
    
    00:25 #10. Palawan Island 
    01:02 #9. Seljalandsfoss 
    01:41 #8. Plitvice Lakes National Park 
    02:19 #7. Algar de Benagil 
    02:55 #6. Cliffs of Moher 
    03:33 #5. The Great Barrier Reef & Whitehaven Beach 
    05:13 #4. Antelope Canyon
    04:46 #3, #2, #1 ???
    
    For more incredible content from Getty Images, check out their website here: http://www.gettyimages.com/travel
    
    To vote for what video we produce next, go to our suggest page here: http://www.watchmojo.com/my/suggest.php
    
    Our Magazine!! Learn the inner workings of WatchMojo and meet the voices behind the videos, articles by our specialists from gaming, film, tv, anime and more. VIEW INSTANTLY: http://goo.gl/SivjcX
    
    WatchMojo's Social Media Pages
    http://www.Facebook.com/WatchMojo
    http://www.Twitter.com/WatchMojo 
    http://instagram.com/watchmojo 
    
    Get WatchMojo merchandise at shop.watchmojo.com
    
    WatchMojo’s ten thousand videos on Top 10 lists, Origins, Biographies, Tips, How To’s, Reviews, Commentary and more on Pop Culture, Celebrity, Movies, Music, TV, Film, Video Games, Politics, News, Comics, Superheroes. Your trusted authority on ranking Pop Culture.`,
  },
];

function App(props) {
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
        {/* <div>Count: {props.count}</div>

        <button onClick={() => props.increaseCounter()}>Increase Count</button>
        <button onClick={() => props.decreaseCounter()}>Decrease Count</button> */}
      </main>
      <Footer />
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
