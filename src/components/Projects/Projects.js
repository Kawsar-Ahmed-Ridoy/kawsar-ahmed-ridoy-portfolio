import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div className="mb-16 max-w-screen-xl mx-auto mt-24">
        <div className="mb-6">
          <h2 className="text-center text-4xl font-bold text-green-500">
            My Projects
          </h2>
          <p className="text-center  text-gray-500">__________________</p>
        </div>
        <div className="flex justify-around text-center align-middle flex-wrap">
          <div className="card w-96 h-[480px] py-7 shadow-xl pb-0 mb-4">
            <figure>
              <img
                src="https://i.ibb.co/xSsGXCd/localhost-3001.png"
                className="w-full"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <Link
                to='/project1'
                className="btn text-center text-2xl font-bold mt-4  bg-cyan-400 border-none "
              >
                Details
              </Link>
            </div>
          </div>
          <div className="card w-96 h-[480px] py-7 shadow-xl pb-0 mb-4">
            <figure>
              <img
                src="https://i.ibb.co/KXy3dGs/wild-photography-74046-web-app.png"
                className="w-full"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <Link
                to='/project2'
                className="btn text-center text-2xl font-bold mt-4  bg-cyan-400 border-none "
              >
                Details
              </Link>
            </div>
          </div>
          <div className="card w-96 h-[480px] py-7 shadow-xl pb-0 mb-4">
            <figure>
              <img
                src="https://i.ibb.co/wJ8YKB4/our-web-school-web-app-courses.png"
                className="w-full"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <Link
              to='/project3'
                className="btn text-center text-2xl font-bold mt-4  bg-cyan-400 border-none "
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
