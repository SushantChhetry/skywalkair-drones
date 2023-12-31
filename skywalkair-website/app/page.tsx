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
import Detail from "./details/page";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Nav />
      <main className="bg-blue-50 flex flex-col justify-center items-center h-screen">
        <div className="flex md:flex-row px-5 py-2 m-10 items-center justify-between gap-10 flex-col-reverse">
          <div className="max-w-2xl flex justify-center items-center flex-col">
            <h2 className="text-3xl md:text-5xl text-blue-900 text-center">
              Enhance your visuals with awe-inspiring aerial perspectives filmed
              by our expert drone videography services.
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <Image src="/Logo.png" height={500} width={500} alt="logo" />
          </div>
        </div>
        <Link href="#about">
          <BsArrowDownCircle
            size={40}
            className="text-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
             hover:text-indigo-300 duration-300 opacity-0 md:opacity-100"
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
        <section id="detail">
          <Detail />
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
