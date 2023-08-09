"use client";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("Submitting Form");

    const { name, email, service, phone } = formData;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, service, phone }),
    };

    try {
      const response = await fetch("/api/send-mail", requestOptions);
      const data = await response.json();

      console.log("Message sent successfully:", data.message);
    } catch (error) {
      console.log("Error sending message:", error);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <h3 className=" text-indigo-700 text-3xl">Contact Us!</h3>
      <br />
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <form
            className="w-96 bg-white rounded-lg p-6 shadow-md"
            onSubmit={handleSubmit}
          >
            <label className="text-indigo-700 font-bold mt-4 mb-2">
              Full Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />

            <label className="text-gray-700 font-bold mt-4 mb-2">Service</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a Service</option>
              <option value="event-coverage">Event Coverage</option>
              <option value="real-estate-marketing">
                Real Estate Marketing
              </option>
              <option value="mapping-survey">Mapping & Surveying</option>
            </select>
            <br />

            <label className="text-indigo-700 font-bold mt-4 mb-2">Email</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />

            <label className="text-indigo-700 font-bold mt-4 mb-2">Phone</label>
            <input
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <br />
            <button
              className=" bg-indigo-700 text-white my-7 p-2 px-3 rounded-lg hover:bg-indigo-400"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="">
          <Image src="/contact.gif" height={500} width={500} alt="contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
