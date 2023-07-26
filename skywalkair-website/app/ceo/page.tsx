import React from "react";
import Image from "next/image";

const CEO = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <div className=" w-screen max-w-5xl  h-4/6 my-4 flex flex-col justify-center items-center">
        <Image src="/Drone_Isometric.png" alt="ceo" width={300} height={300} />
        <p className=" text-indigo-700 text-3xl">
          Expertise, commitment, and value.
        </p>

        <p className=" text-indigo-700 text-3xl my-3">
          It&apos;s our mission to consistently provide these to our clients
        </p>
        <h1 className="text-indigo-700 text-xl">Cheyenne Wolf, CEO</h1>
      </div>
    </div>
  );
};

export default CEO;
