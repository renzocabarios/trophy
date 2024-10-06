"use client";

import Feature from "./components/feature";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Questions from "./components/question";
import Solution from "./components/solution";



export default function Home() {
  return (
    <main>
      <Nav />
		  <Hero />
		  <Feature />
      <Solution />
      <Questions />
      <Footer />
    </main>
  );
}
