import React from "react";

const Contact = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <h3 className=" text-indigo-700 text-3xl">Contact Us!</h3>
      <br />
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <form className="w-96 bg-white rounded-lg p-6 shadow-md">
            <label className="text-indigo-700 font-bold mt-4 mb-2">
              Full Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter Name"
              required
            />
            <br />

            <label className="text-indigo-700 font-bold mt-4 mb-2">
              Service
            </label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter Service"
              required
            />
            <br />

            <label className="text-indigo-700 font-bold mt-4 mb-2">Email</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              type="email"
              placeholder="Enter Email"
              required
            />
            <br />

            <label className="text-indigo-700 font-bold mt-4 mb-2">Phone</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter Phone"
            />
            <br />
            <button className=" bg-indigo-700 text-white my-7 p-2 px-3 rounded-lg hover:bg-indigo-400">
              Submit
            </button>
          </form>
        </div>
        <div className="">Slideshow</div>
      </div>
    </div>
  );
};

export default Contact;
