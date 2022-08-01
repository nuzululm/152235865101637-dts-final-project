import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "../config/api";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import { Navigation } from "swiper";

const Carousel = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    axios.get(API_URL.topComic).then((response) => {
      console.log(response.data.data);
      setComics(response?.data?.data);
    });
  }, []);

  const limitString = (string, maxLength) => {
    if (string.length > maxLength) {
      return string?.slice(0, maxLength) + "...";
    }

    return string;
  };

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {comics.map((item, id) => (
          <SwiperSlide key={id}>
            <div className="w-full h-[600px] text-white inline-block cursor-pointer relative">
              <Link to={`/detail/${item?.mal_id}`} className="w-full h-full">
                <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
                <img
                  className="w-full h-full object-cover"
                  src={item?.images?.webp?.large_image_url}
                  alt={item?.title}
                />
                <div className="absolute top-[20%] p-20 md:p-30 mx-5">
                  <h1 className="text-3xl md:text-5x font-bold">{item?.title}</h1>
                  <p className="text-gray-400 text-sm mb-2">{item?.type}</p>
                  <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-grey-200">
                    {limitString(item?.synopsis, 150)}
                  </p>
                </div>
                <div className="absolute right-[5%] top-[10%] hidden lg:block ring-white ring-4 rounded mx-5">
                  <img className="w-auto h-[450px] rounded" src={item?.images?.webp?.image_url} alt={item?.title} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
