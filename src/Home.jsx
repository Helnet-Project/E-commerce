import React from "react";
import Shop from "./Shop";

export default function Home() {
  return (
    <main id="home">
      <section className="mx-auto flex min-h-[650px] max-w-6xl items-center px-6">
        <div className="ml-auto w-full max-w-3xl">
          <p className="mb-8 text-lg text-[#96735c]">AUTUMN / WINTER 2026</p>

          <h1 className="text-7xl font-medium md:text-8xl">Quiet luxury.</h1>

          <h2 className="mt-2 font-serif text-7xl text-[#b77c49] md:text-8xl">
            Made to last.
          </h2>

          <p className="mt-12 max-w-3xl text-2xl text-gray-500">
            Thoughtfully selected essentials for an effortless everyday.
            <br />
            Timeless design, exceptional quality.
          </p>

          <a href="#shop">
            <button className="mt-10 bg-[#173b2d] px-8 py-4 text-white">
              Explore the collection →
            </button>
          </a>
        </div>
      </section>

      <Shop />
    </main>
  );
}
