import React from "react";
import Image from "next/image";

const Detail = () => {
  return (
    <div className=" h-screen bg-blue-50 flex flex-col justify-center items-center m-6">
      <div className=" flex">
        <div>
          <Image src="/WhyUs.jpg" alt="drone" width={500} height={500} />
        </div>
        <div className=" max-w-lg text-center justify-center items-center">
          <h1 className=" text-4xl text-blue-900 my-8">Why Us?</h1>
          <p className="text-xl md:text-lg text-indigo-700">
            Founded in 2020, SkywalkAir is one of Alabama&apos;s first premier
            provider of professional drone footage services, catering to a wide
            range of clients including individuals, local businesses, and
            international enterprises.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
