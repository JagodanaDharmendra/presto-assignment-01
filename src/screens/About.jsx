import React from "react";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto m-4 font-semibold space-y-4">
        <Link to="/">Go to Home</Link>
        <div>About Page</div>
      </main>
      <Footer />
    </div>
  );
}
