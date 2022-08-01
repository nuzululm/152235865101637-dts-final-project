import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopItem from "../components/TopItem";
import API_URL from "../config/api";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <TopItem title="TOP MANGA" fetchURL={API_URL.topManga} />
      <TopItem title="TOP MANHUA" fetchURL={API_URL.topManhua} />
      <TopItem title="TOP MANHWA" fetchURL={API_URL.topManhwa} />
      <Footer />
    </>
  );
};

export default Home;
