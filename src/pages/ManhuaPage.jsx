import React from "react";
import ComicList from "../components/ComicList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import API_URL from "../config/api";

const ManhuaPage = () => {
  return (
    <>
      <Navbar />
      <ComicList title="MANHUA LIST" fetchURL={API_URL.manhuaList} />
      <Footer />
    </>
  );
};

export default ManhuaPage;
