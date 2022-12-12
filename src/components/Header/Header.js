import React from "react";
import anim from "../../anim.json";
import Lottie from "lottie-react";
const Header = () => {
  return (
    <>

    <div className="container mx-auto flex justify-center items-center flex-wrap lg:flex-row md:flex-row py-12">
      <div className="w-full md:w-1/2 lg:w-1/2 px-6 my-4">
        <h1 className="text-6xl text-red-500">Hello I'm</h1>
        <h2 className="text-6xl font-extrabold" >Kawsar Ahmed</h2>
        <h2 className="text-6xl text-blue-500 font-extrabold mb-2" >Ridoy</h2>
        <p className="font-bold">I am a React Based Front End Web Developer. I know UI/UX Design & Interests in learning and coding new technologies.</p>
        
        <a href='Resume.pdf' download='Resume' target={"blank"} className="btn font-bold mt-2 bg-cyan-400 border-none text-[16px]">My Resume</a>
        
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2">
        <Lottie animationData={anim}></Lottie>
      </div>
    </div>
    </>
  );
};

export default Header;
