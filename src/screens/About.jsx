import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import { Counter } from "../redux/counter/Counter";
import PokemonView from "../services/pokemon/PokemonView";

export default function About() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto m-4 font-semibold space-y-4">
        <Link to="/">Go to Home</Link>
        <div>About Page</div>
        <Counter />
        <PokemonView />
      </main>
      <Footer />
    </div>
  );
}
