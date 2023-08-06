import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BsArrowDownCircle } from "react-icons/bs";
import Link from "next/link";

// pages
import About from "./about/page";
import CEO from "./ceo/page";
import Client from "./client/page";
import Service from "./services/page";
import Contact from "./contact/page";
import Social from "./social/pages";

export default function Home() {
  return (
    <div className=" h-screen ">
      <Nav />
      <main className=" bg-blue-50 flex flex-col justify-center items-center  h-screen">
        <div className="flex px-5 py-2 m-10 items-center justify-between  gap-10">
          <div className="max-w-2xl flex justify-center items-center flex-col">
            <h2 className=" text-5xl text-blue-900">
              Enhance your visuals with awe-inspiring aerial perspectives filmed
              by our expert drone videography services.
            </h2>
          </div>
          <Image src="/logo.png" width={350} height={350} alt="logo" />
        </div>
        <Link href="#about">
          <BsArrowDownCircle
            size={40}
            className=" text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-300 duration-300"
          />
        </Link>
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
        <section id="social">
          <Social />
        </section>
        <Footer />
      </div>
    </div>
  );
}
