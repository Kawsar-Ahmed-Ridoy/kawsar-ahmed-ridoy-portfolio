import React from "react";

const Project3 = () => {
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
            <span className="text-red-500">Our </span>
            <span> Web</span>
            <span className="text-blue-500"> School</span>
          </h1>
          <p className="text-gray-600 font-bold mb-4">
            About A friendly Bike reselling platform for buyers and sellers.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Kawsar-Ahmed-Ridoy/our-web-school-client"
              target="_blank"
              rel="noreferrer"
              className="btn bg-red-500 border-none font-bold "
            >
              Client Site
            </a>
            <a
              href="https://github.com/Kawsar-Ahmed-Ridoy/our-web-school-server"
              target="_blank"
              rel="noreferrer"
              className="btn bg-black border-none font-bold "
            >
              Server Site
            </a>
            <a
              href="https://our-web-school.web.app/"
              target="_blank"
              rel="noreferrer"
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
            <li>User can login with email and password & also can login with google account.</li>
            <li>User can create account with email and password.</li>
            <li>
            User can see all the list of services. 
            
            </li>
            <li>user can view all the service in details.</li>
            <li>user can logout form website when he want.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project3;
