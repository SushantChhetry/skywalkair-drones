import React from "react";
import Image from "next/image";

const CEO = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center text-center">
      <div className=" w-screen md:max-w-5xl  max-w-3xl h-4/6 my-4 flex flex-col justify-center items-center">
        <Image
          src="/CEO.jpg"
          alt="ceo"
          width={300}
          height={300}
          className="rounded-full border-2 my-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        />
        <p className=" text-indigo-700 md:text-3xl text-2xl mx-8">
          Expertise, commitment, and value.
        </p>

        <p className=" text-indigo-700  md:text-3xl text-2xl m-8">
          It&apos;s our mission to consistently provide these to our clients
        </p>
        <h1 className="text-indigo-700 text-xl font-bold">
          Cheyenne Wolf, CEO
        </h1>
      </div>
    </div>
  );
};

export default CEO;
