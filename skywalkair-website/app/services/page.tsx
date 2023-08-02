import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center px-5">
      <h1 className=" text-indigo-700 text-4xl">Our Services</h1>
      <div className="grid grid-cols-3 max-w-screen-lg w-screen my-14 h-4/6">
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
          <Link href="#" target="_blank">
            <BsArrowDownCircle
              size={40}
              className=" text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-300 duration-300  my-9"
            />
          </Link>
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
          <Link href="#" target="_blank">
            <BsArrowDownCircle
              size={40}
              className=" text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-300 duration-300  my-9"
            />
          </Link>
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
          <Link href="#" target="_blank">
            <BsArrowDownCircle
              size={40}
              className=" text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300  my-9"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
