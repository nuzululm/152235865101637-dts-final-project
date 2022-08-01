import React from "react";
import { Link } from "react-router-dom";

const TopItem = () => {
  return (
    <>
      <div className="flex justify-between px-4 sm:px-6 lg:px-8">
        <h2>title</h2>
        <Link to="/">View All</Link>
      </div>
    </>
  );
};

export default TopItem;
