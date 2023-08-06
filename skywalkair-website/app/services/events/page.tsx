import React from "react";

function Event() {
  return (
    <div className=" flex justify-evenly gap-3 items-center mx-10 h-fit p-12">
      <div>
        <div className=" bg-indigo-700 -z-10 h-10 w-screen max-w-xl"></div>
      </div>

      <div className="max-w-xs text-indigo-700">
        <h3 className=" text-2xl"> Event Coverage</h3>
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

export default Event;
