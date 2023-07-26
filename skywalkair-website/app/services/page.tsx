import React from "react";

const Service = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center px-5">
      <h1 className=" text-indigo-700 text-4xl">Our Services</h1>
      <div className="grid grid-cols-3 gap-4 max-w-screen-xl w-screen my-14 h-4/6">
        <div className=" p-4 bg-indigo-100 hover:bg-indigo-400">Row 1</div>
        <div className="p-4 bg-indigo-200 hover:bg-indigo-400">Row 2</div>
        <div className="p-4 bg-indigo-300 hover:bg-indigo-400">Row 3</div>
      </div>
    </div>
  );
};

export default Service;
