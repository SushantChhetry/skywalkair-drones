import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// pages
import About from "./about/page";
import CEO from "./ceo/page";
import Client from "./client/page";
import Service from "./services/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <main className=" bg-blue-50 h-screen">
        <Nav />
        <div>
          <div className="flex justify-between px-10 py-2 m-10 items-center">
            <div>
              <h2 className=" text-4xl text-blue-900">
                Enhance your visuals with awe-inspiring aerial perspectives
                filmed by our expert drone videography services.
              </h2>
              <br />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-2xl">
                Start Now
              </button>
            </div>
            <p>Logo</p>
          </div>
        </div>
      </main>
      <div className="flex flex-col">
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Service />
        </section>
        <section id="client">
          <Client />
        </section>
        <section id="ceo">
          <CEO />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}
