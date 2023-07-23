import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className=" bg-blue-50 h-screen">
        <Nav />
        <div>
          <div className="flex justify-between px-5 py-2">
            <h2>
              Enhance your visuals with awe-inspiring aerial perspectives filmed
              by our expert drone videography services.
            </h2>
            <p>Logo</p>
          </div>
        </div>
      </main>
    </>
  );
}
