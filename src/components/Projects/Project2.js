import React from "react";

const Project2 = () => {
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
            <span className="text-red-500">Wild </span>
            <span> Photo</span>
            <span className="text-blue-500">graphy</span>
          </h1>
          <p className="text-gray-600 font-bold mb-4">
          Individual Photography service selling platform.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Kawsar-Ahmed-Ridoy/wild-photography-client"
              target="blank"
              className="btn bg-red-500 border-none font-bold "
            >
              Client Site
            </a>
            <a
              href="https://github.com/Kawsar-Ahmed-Ridoy/wild-photography-server"
              target="blank"
              className="btn bg-black border-none font-bold "
            >
              Server Site
            </a>
            <a
              href="https://wild-photography-74046.web.app/"
              target="blank"
              className="btn bg-blue-500 border-none font-bold "
            >
              Live View
            </a>
          </div>
        </div>

        <div className="text-center mt-8 mb-4">
          <h4 className="text-green-500 font-bold text-2xl">Main Features</h4>
          <p className="text-gray-500">__________________</p>
        </div>

        <div className=" max-w-[500px] mx-auto flex justify-center ">
          <ul className="list-disc mx-auto font-bold text-gray-600 text-[18px]">
            <li>This is best wild photography website.</li>
            <li>This site home page added image slider.</li>
            <li>
            Home page scroll down, as you can see some <br />{" "}
              Service, More, about, and Footer. 
            </li>
            <li>Services and My Reviews routes are private.</li>
            <li>User service Review Functionality added.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project2;
