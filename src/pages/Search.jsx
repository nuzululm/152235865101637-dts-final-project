import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Footer from "../components/Footer";
import Manga from "../components/Manga";
import Navbar from "../components/Navbar";
import API_URL from "../config/api";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  const [manga, setManga] = useState([]);
  const [search, setSearch] = useState("");

  const searchOnChange = (event) => {
    setSearch(event.target.value);
  };

  const searchSubmit = async () => {
    try {
      const response = await axios.get(
        `${API_URL.search}${search.toLowerCase()}&limit=24`
      );
      setManga(response?.data?.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        theme: "colored",
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    const getManga = async () => {
      try {
        const response = await axios.get(API_URL.defaultSearch);
        console.log(response);
        setManga(response?.data?.data);
      } catch (error) {
        if (error?.response?.status === 429) {
          getManga();
        }
        console.log(error);
      }
    };
    getManga();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full mt-4">
        <div className="flex justify-center items-cente px-10 focus:ring-8">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full h-12 p-5 mr-2"
            onChange={searchOnChange}
          />
          <button
            className="bg-sky-700 hover:bg-sky-600 p-4 text-white  rounded-md"
            onClick={searchSubmit}
          >
            <span>
              <RiSearch2Line className="h-5 w-5" />
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between px-4 sm:px-6 lg:px-8 mt-5">
          <h2 className="text-slate-700 font-bold md:text-xl p-4">
            Search Result
          </h2>
        </div>
        <div className="w-full grid grid-cols-6 gap-1 lg:gap-2">
          {manga.map((item, id) => (
            <Manga key={id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
