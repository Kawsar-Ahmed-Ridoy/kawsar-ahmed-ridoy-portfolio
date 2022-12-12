import React from "react";
import { Link } from "react-router-dom";
import errorimg from "../asset/errorimg.png";

const ErrorPage = () => {
  return (
    <div>
      <div
        style={{ height: "100vh" }}
        className="flex  justify-center align-middle w-full text-center  "
      >
        <div className="my-auto ">
          <img className="w-96" src={errorimg} alt="" />
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

export default ErrorPage;
