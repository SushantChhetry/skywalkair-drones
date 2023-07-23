import React from "react";
import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  const urls = {
    facebook: "https://www.google.com/",
    instagram: "https://www.google.com/",
    youtube: "https://www.google.com/",
  };

  return (
    <div className="bg-indigo-700 text-white justify-center items-center h-30 flex flex-col py-6">
      <h4>You can find us at</h4>
      <div className="flex justify-center items-center gap-3">
        <Link href={urls.facebook} target="_blank">
          <AiFillFacebook
            className="text-white hover:text-gray-400"
            size={30}
          />
        </Link>
        <Link href={urls.instagram} target="_blank">
          <AiFillInstagram
            className="text-white hover:text-gray-400"
            size={30}
          />
        </Link>
        <Link href={urls.youtube} target="_blank">
          <AiFillYoutube className="text-white hover:text-gray-400" size={30} />
        </Link>
      </div>
      <p className=" text-xs text-gray-300">
        &copy; 2023 Skywalkair. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
