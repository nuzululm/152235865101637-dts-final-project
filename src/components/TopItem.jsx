import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Manga from "./Manga";

const TopItem = ({ title, fetchURL, type = "manga" }) => {
  const [manga, setManga] = useState([]);

  useEffect(() => {
    const getManga = async () => {
      try {
        const response = await axios.get(fetchURL);
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
  }, [fetchURL]);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between px-4 sm:px-6 lg:px-8 mt-5">
          <h2 className="text-slate-700 font-bold md:text-xl p-4">{title}</h2>
          <Link to={`/${type}`} className="text-slate-600 font-semibold hover:text-slate-800 md:text-md p-4">
            View All
          </Link>
        </div>

        <div className="w-full grid grid-cols-6 gap-1 lg:gap-2">
          {manga.map((item, id) => (
            <Manga key={id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopItem;
