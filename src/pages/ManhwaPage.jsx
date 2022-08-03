import React from "react";
import ComicList from "../components/ComicList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import API_URL from "../config/api";

const ManhwaPage = () => {
  return (
    <>
      <Navbar />
      <ComicList title="MANHWA LIST" fetchURL={API_URL.manhwaList} />
      <Footer />
    </>
  );
};

export default ManhwaPage;
