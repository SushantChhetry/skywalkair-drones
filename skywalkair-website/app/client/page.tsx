import React from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

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
      <div className="grid grid-cols-2 grid-rows-3  max-w-4xl ">
        <div className="p-4 text-indigo-700 flex flex-col justify-center items-center">
          <Link href="#" target="_blank">
            <h1 className="font-semibold">Javier Burrows</h1>
            <p>Real Estate Inc</p>
          </Link>
        </div>

        <div className="bg-gray-200 p-4 my-4">
          <p>
            Skywalkaik&apos;s breathtaking drone footage brought our real estate
            listings to life, impressing clients and increasing our sales
          </p>
        </div>

        <div className="p-4 text-indigo-700 flex flex-col justify-center items-center">
          <Link href="#" target="_blank">
            <h1 className="font-semibold">Javier Burrows</h1>
            <p>Real Estate Inc</p>
          </Link>
        </div>

        <div className="bg-gray-200 p-4  my-4">
          <p>
            Skywalkaik&apos;s breathtaking drone footage brought our real estate
            listings to life, impressing clients and increasing our sales
          </p>
        </div>

        <div className="p-4 text-indigo-700 flex flex-col justify-center items-center">
          <Link href="#" target="_blank">
            <h1 className="font-semibold">Javier Burrows</h1>
            <p>Real Estate Inc</p>
          </Link>
        </div>

        <div className="bg-gray-200 p-4  my-4">
          <p>
            Skywalkaik&apos;s breathtaking drone footage brought our real estate
            listings to life, impressing clients and increasing our sales
          </p>
        </div>
      </div>
    </div>
  );
};

export default Client;
