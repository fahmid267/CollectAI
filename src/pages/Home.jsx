"use client";
import Carousel from "../components/ui/carousel.jsx";
import Hero from "../components/Hero";
import ItemCard from "../components/ItemCard.jsx";
import LightRays from "../../components/LightRays.jsx";
import React from "react";
import { Link } from "react-router-dom";

import {
  brainstormingCategory,
  codeCategory,
  fileCategory,
  imageCategory,
  news1,
  news2,
  researchCategory,
  textCategory,
} from "../assets";
import { tools } from "../data/tools.js";

export default function Home() {
  const [currentNewsIndex, setCurrentNewsIndex] = React.useState(0);

  const handlePreviousNews = () => {
    setCurrentNewsIndex((prevIndex) =>
      prevIndex === 0 ? news.length - 1 : prevIndex - 1,
    );
  };

  const handleNextNews = () => {
    setCurrentNewsIndex((prevIndex) =>
      prevIndex === news.length - 1 ? 0 : prevIndex + 1,
    );
  };



  const categories = [
    {
      title: "Text Generation",
      button: "See Best Tools",
      src: textCategory,
    },
    {
      title: "Code Generation",
      button: "See Best Tools",
      src: codeCategory,
    },
    {
      title: "Image Generation",
      button: "See Best Tools",
      src: imageCategory,
    },
    {
      title: "Research",
      button: "See Best Tools",
      src: researchCategory,
    },
    {
      title: "Brainstorming",
      button: "See Best Tools",
      src: brainstormingCategory,
    },
    {
      title: "File Analysis",
      button: "See Best Tools",
      src: fileCategory,
    },
  ];

  const news = [
    {
      title: "OpenAI Expands ChatGPT With Real-Time Web Collaboration Features",
      decription:
        "OpenAI announced a new update to ChatGPT that allows teams to collaborate on shared AI workspaces in real time, aiming to improve productivity for businesses and remote teams. The feature also includes live document editing and AI-assisted meeting summaries.",
      author: "Emma Collins",
      date: "May 7, 2026",
      image: news1,
    },
    {
      title:
        "Anthropic Introduces Claude “Studio” for Enterprise AI Automation",
      decription:
        "Anthropic revealed Claude Studio, a new platform designed to help companies automate workflows using customizable AI agents. The launch focuses on secure enterprise integrations and improved transparency in AI-generated outputs.",
      author: "Daniel Harper",
      date: "May 6, 2026",
      image: news2,
    },
  ];

  return (
    <div className="flex flex-col items-center overflow-x-hidden w-full">
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Hero />
      </div>

      <h1 id="featured" className="text-white text-4xl font-semibold mb-20 scroll-mt-24 mt-24">Featured</h1>

      <div className="flex flex-wrap gap-15 justify-center">
        {tools.map((tool, index) => (
          <Link key={index} to={`/tool/${tool.title}`}>
            <ItemCard
              key={index}
              title={tool.title}
              description={tool.description}
              image={tool.image}
              creator={tool.creator}
              link={tool.link}
              tags={tool.tags}
            />
          </Link>
        ))}
      </div>

      <div className="mt-40">
        <span className="flex items-center gap-5 mb-10">
          <div className="w-20 h-0.5 bg-white"></div>
          <h1 className="text-2xl font-semibold">
            Choose From a Wide Range of Possibilities
          </h1>
          <div className="w-20 h-0.5 bg-white"></div>
        </span>
        <h1 className="text-4xl font-bold text-white" id="explore">Explore Your Needs</h1>

        <div className="relative h-full py-20">
          <Carousel slides={categories} />
        </div>
      </div>

      <div className="mt-30 mb-20">
        <span className="flex justify-center items-center gap-5 mb-10">
          <div className="w-20 h-0.5 bg-white"></div>
          <h1 className="text-2xl font-semibold">
            Keep Up to Date with the World of AI
          </h1>
          <div className="w-20 h-0.5 bg-white"></div>
        </span>

        <h1 id="news" className="text-4xl font-bold text-white scroll-mt-24">News</h1>

        {/* Carousel */}
        <div className="flex gap-10 justify-center mt-15 items-center">
          <button
            onClick={handlePreviousNews}
            className="w-10 h-10 rounded-full border border-white hover:bg-white hover:text-black transition-all flex items-center justify-center"
            aria-label="Previous news"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex justify-between items-center border rounded-2xl px-10 py-8 w-5xl">
            <div className="w-full mr-10">
              <h1 className="font-bold text-4xl mb-10 text-left">
                {news[currentNewsIndex].title}
              </h1>

              <p className="text-left mb-5">
                {news[currentNewsIndex].decription}
              </p>

              <p className="text-left mb-5 text-gray-400">
                {news[currentNewsIndex].author}
              </p>

              <p className="text-right text-gray-400">
                {news[currentNewsIndex].date}
              </p>
            </div>

            <div className="rounded-2xl shadow-sm w-full">
              <img
                src={news[currentNewsIndex].image}
                alt={news[currentNewsIndex].title}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
          <button
            onClick={handleNextNews}
            className="w-10 h-10 rounded-full border border-white hover:bg-white hover:text-black transition-all flex items-center justify-center"
            aria-label="Next news"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicator */}
        <div className="flex justify-center gap-2 mt-5">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentNewsIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentNewsIndex ? "bg-white" : "bg-gray-600"
                }`}
              aria-label={`Go to news item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
