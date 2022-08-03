import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Manga from "../components/Manga";

const Detail = () => {
  const [manga, setManga] = useState({});
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [titles, setTitles] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  let params = useParams();
  // let [queryStrings] = useSearchParams();
  let id = params.id;

  useEffect(() => {
    const getManga = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/manga/${id}/full`);
        setManga(response?.data?.data);
        setAuthors(response?.data?.data.authors);
        setGenres(response?.data?.data.genres);
        setTitles(response?.data?.data.title_synonyms);
      } catch (error) {
        if (error?.response?.status === 429) {
          getManga();
        }
        console.log(error);
      }
    };
    getManga();
  }, [id]);

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/manga/${id}/recommendations`);
        setRecommendations(response?.data?.data);
      } catch (error) {
        if (error?.response?.status === 429) {
          getRecommendations();
        }
        console.log(error);
      }
    };
    getRecommendations();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="w-full h-[400px] inline-block relative z-1">
        <div className="w-full h-full">
          <div className="absolute w-full h-[400px] bg-gradient-to-r from-black z-2"></div>
          <img className="w-full h-full object-cover" src={manga?.images?.webp?.large_image_url} alt={manga?.title} />
        </div>
        <div className="absolute top-[5%] left-[5%] flex flex-auto">
          <div className="flex">
            <img className="w-full h-full rounded-lg" src={`${manga?.images?.webp?.image_url}`} alt={manga?.title} />
          </div>
          <div className="ml-5 flex-auto rounded-lg py-2 px-4 mx-2 my-auto">
            <h2 className="text-white text-4xl font-bold mb-1">{manga?.title}</h2>
            <p className="text-white text-sm mb-2">{titles.join(", ")}</p>
            <p className="text-white rounded-sm text-md font-semibold mt-2 mb-10">{manga?.type}</p>
            <p className="text-white text-md mt-2 font-semibold">
              Author :{" "}
              <span>
                {authors
                  .map((item) => {
                    return item.name;
                  })
                  .join(", ")}
              </span>
            </p>
            <p className="text-white text-md mt-1 font-semibold">
              Genre :{" "}
              <span>
                {genres
                  .map((item) => {
                    return item.name;
                  })
                  .join(", ")}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-10 mt-4 bg-white rounded-lg shadow-md p-5">
        <h2 className="text-xl mb-4 font-bold text-slate-700">Synopsis</h2>
        <p className="text-md text-slate-600">{manga?.synopsis}</p>
      </div>

      <div className="mx-10 mt-4 bg-white rounded-lg shadow-md p-5">
        <h2 className="text-xl mb-4 font-bold text-slate-700">Background</h2>
        <p className="text-md text-slate-600">{manga?.background}</p>
      </div>

      {/* Recommendations  */}
      <div className="flex flex-col">
        <div className="flex justify-between px-4 sm:px-6 lg:px-8 mt-5">
          <h2 className="text-slate-700 font-bold md:text-xl p-4">Recommendations</h2>
        </div>

        <div className="w-full grid grid-cols-6 gap-1 lg:gap-2">
          {recommendations.map((item, id) => (
            <Manga key={id} item={item.entry} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Detail;
