import React from "react";
import { Link } from "react-router-dom";

const Project1 = () => {
  return (
    <div>
      <div className="mb-16 max-w-screen-xl mx-auto mt-8">
        
        <div className="flex justify-around text-center align-middle flex-wrap">
          <figure className="card w-96 h-[480px] py-7 shadow-xl pb-0 mb-4">
            <img
              src="https://i.ibb.co/xSsGXCd/localhost-3001.png"
              className="w-full"
              alt="Shoes"
            />
          </figure>
          <figure className="card w-96 h-[480px] py-7 shadow-xl pb-0 mb-4">
            <img
              src="https://i.ibb.co/xSsGXCd/localhost-3001.png"
              className="w-full"
              alt="Shoes"
            />
          </figure>
          <figure className="card w-96 h-[480px] py-7 shadow-xl pb-0 mb-4">
            <img
              src="https://i.ibb.co/xSsGXCd/localhost-3001.png"
              className="w-full"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className=" text-center mt-4">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-red-500">Used </span>
            <span> Bikes</span>
            <span className="text-blue-500"> Mart</span>
          </h1>
          <p className="text-gray-600 font-bold mb-4">
            About A friendly Bike reselling platform for buyers and sellers.
          </p>
          <div className="flex justify-center gap-4">
            <Link className="btn bg-red-500 border-none font-bold ">
              Client Site
            </Link>
            <Link className="btn bg-black border-none font-bold ">
              Server Site
            </Link>
            <Link className="btn bg-blue-500 border-none font-bold ">
              Live View
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 mb-4">
            <h4 className="text-green-500 font-bold text-2xl">Main Features</h4>
            <p className="text-gray-500">__________________</p>
        </div>

        <div className=" max-w-[500px] mx-auto flex justify-center ">
            <ul className="list-disc mx-auto font-bold text-gray-600 text-[18px]">
                <li>This is best used bike resale market.</li>
                <li>This site home page added image slider.</li>
                <li>Home page scroll down, as you can see some Service, <br/> category, More, Advertise, and Footer.</li>
                <li>My orders, Reported items, Dashboard are private.</li>
                <li>Seller insert product form added.</li>
            </ul>
        </div>

      </div>
    </div>
  );
};

export default Project1;
