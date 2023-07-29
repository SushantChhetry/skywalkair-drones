import React from "react";
import { AiFillStar } from "react-icons/ai";

const Client = () => {
  return (
    <div className=" h-screen flex justify-center items-center flex-col">
      <h1 className=" text-4xl text-indigo-700">Client Testimonial</h1>
      <div className="flex my-4 text-indigo-700 text-xl">
        <AiFillStar size={32} />
        <AiFillStar size={32} />
        <AiFillStar size={32} />
        <AiFillStar size={32} />
        <AiFillStar size={32} />
      </div>
    </div>
  );
};

export default Client;
