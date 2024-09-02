"use client";

import Footer from "./components/footer";
import Hero from "./components/hero";
import Header from "./components/nav";
import Problem from "./components/problem";
import Question from "./components/question";
import Solution from "./components/solution";



export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Question />
      <Footer />
    </main>
  );
}
