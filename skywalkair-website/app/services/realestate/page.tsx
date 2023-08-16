import React from "react";

function Estate() {
  return (
    <div className=" flex justify-evenly gap-5 items-center mx-10 h-fit p-12 md:flex-row flex-col-reverse">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QHiyh6_6l0I"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className=" p-4"
      ></iframe>

      <div className="max-w-xs text-indigo-700">
        <h3 className=" text-2xl"> Real Estate Marketing</h3>
        <br />
        <p className="text-xl">
          Founded in 2020, SkywalkAir is one of Alabama&apos;s first premier
          provider of professional drone footage services, catering to a wide
          range of clients including individuals, local businesses, and
          international enterprises.
        </p>
      </div>
    </div>
  );
}

export default Estate;
