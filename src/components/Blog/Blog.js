import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div
        style={{ height: "90vh" }}
        className="flex  justify-center align-middle w-full text-center  "
      >
        <div className="my-auto">
          <div className="text-5xl font-extrabold pb-6">
            <span className="text-red-500 ">Comming </span>
            <span className=""> Soon</span>
            <span className="text-blue-500"> !!!</span>
          </div>
          <Link to={"/"}>
            <button className="btn bg-cyan-400 font-bold border-none">
              Back To Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
