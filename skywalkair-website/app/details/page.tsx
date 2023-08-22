import React from "react";
import Image from "next/image";

const Detail = () => {
  return (
    <div className=" h-screen bg-blue-50 flex flex-col justify-center items-center rounded-full m-5">
      <h1 className=" text-4xl text-blue-900 my-3">Why Us?</h1>
      <div className=" grid grid-cols-2 grid-rows-1 m-5">
        <div>
          <Image src="/WhyUs.jpg" alt="drone" width={500} height={500} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Detail;
