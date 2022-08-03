import React from "react";
import ComicList from "../components/ComicList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import API_URL from "../config/api";

const MangaPage = () => {
  return (
    <>
      <Navbar />
      <ComicList title="MANGA LIST" fetchURL={API_URL.mangaList} />
      <Footer />
    </>
  );
};

export default MangaPage;
