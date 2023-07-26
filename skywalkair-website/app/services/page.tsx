import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";

const Service = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center px-5">
      <h1 className=" text-indigo-700 text-4xl">Our Services</h1>
      <div className="grid grid-cols-3 max-w-screen-xl w-screen my-14 h-4/6">
        <div className=" p-4 bg-indigo-100 ">
          Row 1{" "}
          <BsArrowDownCircle
            size={40}
            className=" text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-300 duration-300"
          />
        </div>
        <div className="p-4 bg-indigo-200">
          Row 2{" "}
          <BsArrowDownCircle
            size={40}
            className=" text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-300 duration-300"
          />
        </div>
        <div className="p-4 bg-indigo-300 ">
          Row 3{" "}
          <BsArrowDownCircle
            size={40}
            className=" text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
