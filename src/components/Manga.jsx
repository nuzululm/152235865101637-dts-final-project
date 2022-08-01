import React from "react";
import { Link } from "react-router-dom";

const Manga = ({ item }) => {
  return (
    <>
      <Link
        to={`/detail/${item.mal_id}`}
        className="w-[80px] sm:w-[150px] lg:w-[200px] cursor-pointer relative mb-5 rounded overflow-hidden"
      >
        {item.images.webp.image_url ? (
          <img className="w-full h-full" src={`${item?.images.webp.image_url}`} alt={item?.title} />
        ) : (
          <div className="w-full h-full bg-slate-500"></div>
        )}
        <p className="w-full absolute bottom-0 text-center bg-white opacity-70 text-slate-700 font-bold">
          {item?.title}
        </p>
      </Link>
    </>
  );
};

export default Manga;
