import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchBox = () => {
  return (
    <>
      <div className="w-full mt-4">
        <div className="flex justify-center items-cente px-10 focus:ring-8">
          <input type="text" placeholder="Search ..." className="w-full h-12 p-5 mr-2" />
          <select className="w-full h-12 pl-5 mr-2" defaultValue={""}>
            <option value="">All</option>
            <option value="manga">Manga</option>
            <option value="manhua">Manhua</option>
            <option value="manhwa">Manhwa</option>
          </select>
          <button className="bg-sky-700 hover:bg-sky-600 p-4 text-white  rounded-md">
            <span>
              <RiSearch2Line className="h-5 w-5" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
