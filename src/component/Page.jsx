import React from "react";
import Info from "./Info";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

export default function Page() {
  return (
    <div className="flex justify-center items-center bg-black w-[100vw] h-[100vh] ">
      <div className="bg-slate-100 w-[360px] h-[95vh] rounded-xl overflow-hidden relative">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}
