import React from "react";

const About = () => {
  return (
    <div className=" h-screen flex justify-evenly gap-3 items-center mx-10">
      <div>
        Video<div className=" bg-indigo-700 -z-10 h-10 w-20"></div>
      </div>

      <div className="max-w-xs text-indigo-700">
        <h3 className=" text-3xl">Company Profile</h3>
        <br />
        <p>
          Founded in 2020, SkywalkAir is one of Alabama&apos;s first premier
          provider of professional drone footage services, catering to a wide
          range of clients including individuals, local businesses, and
          international enterprises.
        </p>
      </div>
    </div>
  );
};

export default About;
