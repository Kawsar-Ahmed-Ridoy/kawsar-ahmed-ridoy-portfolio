import React from "react";

const Skill = () => {
  return (
    <>
    <h1 className="text-4xl font-bold text-center text-green-500">My Skill</h1>
    <p className="text-center mb-12">_______________</p>
    <div className="container mx-auto flex flex-col lg:flex-row md:flex-row justify-center items-center mb-16">
      <div className="grid grid-cols-3 gap-4 lg:gap-8 md:gap-8 w-[90%] lg:w-1/2 md:w-1/2 font-bold">
        <div className="flex flex-col justify-center items-center py-4 rounded-3xl shadow-2xl change-color-items">
          <div
            className="radial-progress text-red-500"
            style={{ "--value": 96 }}
          >
            96%
          </div>
          <h4>HTML</h4>
        </div>
        <div className="flex flex-col justify-center items-center py-4 rounded-3xl shadow-2xl change-color-items">
          <div
            className="radial-progress text-red-500"
            style={{ "--value": 92 }}
          >
            92%
          </div>
          <h4>CSS</h4>
        </div>
        <div className="flex flex-col justify-center items-center py-4 rounded-3xl shadow-2xl change-color-items">
          <div
            className="radial-progress text-red-500"
            style={{ "--value": 87 }}
          >
            87%
          </div>
          <h4>JavaScript</h4>
        </div>
        <div className="flex flex-col justify-center items-center py-4 rounded-3xl shadow-2xl change-color-items">
          <div
            className="radial-progress text-blue-500"
            style={{ "--value": 90 }}
          >
            90%
          </div>
          <h4>Bootstrap</h4>
        </div>
        <div className="flex flex-col justify-center items-center py-4 rounded-3xl shadow-2xl change-color-items">
          <div
            className="radial-progress text-blue-500"
            style={{ "--value": 83 }}
          >
            83%
          </div>
          <h4>Tailwind</h4>
        </div>
        <div className="flex flex-col justify-center items-center py-4 rounded-3xl shadow-2xl change-color-items">
          <div
            className="radial-progress text-blue-500"
            style={{ "--value": 81 }}
          >
            81%
          </div>
          <h4>React Js</h4>
        </div>
        <div className="flex flex-col justify-center items-center py-4 rounded-3xl shadow-2xl change-color-items">
          <div
            className="radial-progress text-cyan-400"
            style={{ "--value": 53 }}
          >
            53%
          </div>
          <h4>Node Js</h4>
        </div>
        <div className="flex flex-col justify-center items-center py-4 rounded-3xl shadow-2xl change-color-items">
          <div
            className="radial-progress text-cyan-400"
            style={{ "--value": 67 }}
          >
            67%
          </div>
          <h4>Express Js</h4>
        </div>
        <div className="flex flex-col justify-center items-center py-4 rounded-3xl shadow-2xl change-color-items">
          <div
            className="radial-progress text-cyan-400"
            style={{ "--value": 78 }}
          >
            78%
          </div>
          <h4>MongoDB</h4>
        </div>
      </div>
      <div className="w-full lg:w-1/2 md:w-1/2 px-8 lg:px-0 md:px-0 lg:pl-8 md:pl-8 mt-8 lg:mt-0 md:mt-0">
        <div className="">
          <h1 className="text-5xl font-extrabold text-gray-600 mb-5">Why Hire Me For Your Organization?</h1>
          <p className="text-[18px] my-4"> 
            I am a MERN Stack developer who learned and was certified by
            Programming Hero. I have done many full-stack projects with React
            and Node js. I am an expert in React JS, Express JS, Node JS,
            MongoDB, JWT, JavaScript, Tailwind CSS, Bootstrap, Html5, and CSS3.
            My work experience and skills make me a great match for your job
          </p>
            <a href="#contact" className="btn bg-cyan-400 border-none">Contact ME</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Skill;
