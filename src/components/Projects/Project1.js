import React from "react";

const Project1 = () => {
  return (
    <div>
      <div className="mb-16 max-w-screen-xl mx-auto mt-8">
        <div className="flex justify-around text-center align-middle flex-wrap">
          <figure className="card w-96 py-7 h-[420px] shadow-xl pb-0 mb-4">
            <img
              src="https://i.ibb.co/2tp1HKr/used-bikes-mart-web-app-myorders-2.png"
              className="w-full"
              alt="Shoes"
            />
          </figure>
          <figure className="card w-96  py-7 h-[420px] shadow-xl pb-0 mb-4">
            <img
              src="https://i.ibb.co/nnx0MfW/used-bikes-mart-web-app-myorders-3.png"
              className="w-full"
              alt="Shoes"
            />
          </figure>
          <figure className="card w-96  py-7 h-[420px] shadow-xl pb-0 mb-4">
            <img
              src="https://i.ibb.co/3CZx2wM/used-bikes-mart-web-app-myorders-1.png"
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
            <a
              href="https://github.com/Kawsar-Ahmed-Ridoy/used-bikes-mart-client"
              target="_blank"
              rel="noreferrer"
              className="btn bg-red-500 border-none font-bold "
            >
              Client Site
            </a>
            <a
              href="https://github.com/Kawsar-Ahmed-Ridoy/used-bikes-mart-server"
              target="_blank"
              rel="noreferrer"
              className="btn bg-black border-none font-bold "
            >
              Server Site
            </a>
            <a
              href="https://used-bikes-mart.web.app/"
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
            <li>This is best used bike resale market.</li>
            <li>This site home page added image slider.</li>
            <li>
              Home page scroll down, as you can see some Service, <br />{" "}
              category, More, Advertise, and Footer.
            </li>
            <li>My orders, Reported items, Dashboard are private.</li>
            <li>Seller insert product form added.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project1;
