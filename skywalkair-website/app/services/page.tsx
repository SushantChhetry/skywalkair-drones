"use client";
import { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

// Pages
import Estate from "./realestate/page";
import Mapping from "./mapping/page";
import Event from "./events/page";

const Service = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const handleClick = (buttonNum: number) => {
    if (buttonNum === 1) {
      setShowFirst(true);
      setShowSecond(false);
      setShowThird(false);
    } else if (buttonNum === 2) {
      setShowSecond(true);
      setShowFirst(false);
      setShowThird(false);
    } else {
      setShowThird(true);
      setShowSecond(false);
      setShowFirst(false);
    }
  };

  const handleClose = () => {
    setShowFirst(false);
    setShowSecond(false);
    setShowThird(false);
  };

  return (
    <div className=" md:h-screen flex flex-col justify-center items-center px-5 h-fit">
      <h1 className=" text-indigo-700 text-4xl">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg w-full my-14 h-4/6">
        <div className=" p-4 bg-indigo-100 flex flex-col justify-center items-center">
          <Image
            src="/Party_Isometric.png"
            alt="drone"
            width={200}
            height={200}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
          <h2 className=" text-indigo-700 text-2xl">Event Coverage</h2>
          <p className=" text-center mx-5 my-3">
            Capturing unforgettable moments from above with our expert Event
            Coverage drone services
          </p>
          <BsArrowDownCircle
            size={40}
            className=" text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-300 duration-300  my-9"
            onClick={() => handleClick(1)}
          />
        </div>
        <div className="p-4 bg-indigo-200 flex flex-col justify-center items-center">
          <Image
            src="/Real Estate Agent_Isometric.png"
            alt="drone"
            width={200}
            height={200}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
          <h2 className=" text-indigo-700 text-2xl">Real Estate Marketing</h2>
          <p className=" text-center mx-5 my-3">
            Elevate your Real Estate Marketing with our Drone Services
          </p>
          <BsArrowDownCircle
            size={40}
            className=" text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-300 duration-300  my-9"
            onClick={() => handleClick(2)}
          />
        </div>
        <div className="p-4 bg-indigo-300 flex flex-col justify-center items-center ">
          <Image
            src="/Drone_Isometric.png"
            alt="drone"
            width={200}
            height={200}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          />
          <h2 className=" text-indigo-700 text-2xl">Mapping & Surveying</h2>
          <p className=" text-center mx-5 my-3">
            Precision aerial mapping and surveying services for your projects
          </p>

          <BsArrowDownCircle
            size={40}
            className=" text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300  my-9"
            onClick={() => handleClick(3)}
          />
        </div>
        {showFirst && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
            <div className="bg-white p-8">
              <AiFillCloseCircle
                className=" text-red-700 hover:text-red-400 "
                size={22}
                onClick={handleClose}
              />
              <Event />
            </div>
          </div>
        )}

        {/* Overlay div for the second section */}
        {showSecond && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8">
              <AiFillCloseCircle
                className=" text-red-700 hover:text-red-400 "
                size={22}
                onClick={handleClose}
              />
              <Estate />
            </div>
          </div>
        )}

        {/* Overlay div for the third section */}
        {showThird && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8">
              <AiFillCloseCircle
                className=" text-red-700 hover:text-red-400 "
                size={22}
                onClick={handleClose}
              />
              <Mapping />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
