import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config/api";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [manga, setManga] = useState({});
  let params = useParams();
  // let [queryStrings] = useSearchParams();
  let id = params.id;

  useEffect(() => {
    const getManga = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/manga/${id}/full`);
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
  }, [id]);

  return (
    <>
      <div className="w-full h-[400px] text-white inline-block relative z-1">
        <div className="w-full h-full">
          <div className="absolute w-full h-[400px] bg-gradient-to-t from-black z-2"></div>
          <img className="w-full h-full object-cover" src={manga?.images?.webp?.large_image_url} alt={manga?.title} />
          <h2 className="absolute bottom-0">{manga?.title}</h2>
        </div>
      </div>
      <div className="flex">
        <img className="w-full h-full" src={`${manga?.images?.webp?.image_url}`} alt={manga?.title} />
        <div>
          <h4>{manga?.type}</h4>
          <p>{manga?.synopsis}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
