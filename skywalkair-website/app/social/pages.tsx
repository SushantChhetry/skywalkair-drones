import React from "react";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillPhone,
  AiFillInstagram,
} from "react-icons/ai";

import Link from "next/link";

const Social = () => {
  const urls = {
    facebook: "https://www.facebook.com/profile.php?id=61550085816051&sk=about",
    instagram:
      "https://instagram.com/skywalkairal?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
    youtube: "https://youtube.com/@SkywalkAIR?feature=share7",
    phone: "2562253874",
    email: "email@emai.com",
  };
  return (
    <div className="bg-white flex flex-col justify-center items-center  h-screen max-h-screen ">
      <div className=" bg-blue-50 flex flex-col justify-center items-center w-screen md:h-5/6 md:rounded-full max-w-5xl h-screen">
        <h1 className=" text-4xl text-blue-900 my-3">Let&apos;s Connect!</h1>
        <br />
        <div className=" grid grid-rows-1 grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <p className=" text-indigo-700 text-lg">Mailing Address</p>
            <h3 className=" text-indigo-700 text-2xl text-center">
              9025 Sentinel Cir, Montgomery, AL
            </h3>

            <br />

            <p className=" text-indigo-700 text-lg">Email</p>
            <h2 className=" text-indigo-700 text-2xl">email@email.com</h2>

            <br />

            <p className=" text-indigo-700 text-lg">Phone Number</p>
            <Link href={`tel: ${urls.phone}`}>
              <h3 className=" text-indigo-700 text-2xl">2222222222</h3>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link href={urls.facebook} target="_blank">
              <AiFillFacebook
                className=" text-indigo-600 hover:text-indigo-300 my-2"
                size={50}
              />
            </Link>
            <Link href={urls.facebook} target="_blank">
              <AiFillYoutube
                className=" text-indigo-600 hover:text-indigo-300 my-2"
                size={50}
              />
            </Link>
            <Link href={urls.facebook} target="_blank">
              <AiFillInstagram
                className=" text-indigo-600 hover:text-indigo-300 my-2"
                size={50}
              />
            </Link>

            <Link href={`tel: ${urls.phone}`}>
              <AiFillPhone
                className=" text-indigo-600 hover:text-indigo-300 my-2"
                size={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
