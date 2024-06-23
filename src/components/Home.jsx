import React from "react";
import TypeAnimation from "./TypeAnimation";

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-[#ffffff]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#b70048]">
              Hi
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#b70048]">
              I'm{" "}
              <span
                style={{
                  color: "#b70048",
                  position: "static",
                  textDecoration: "",
                }}
              >
                Indira Priyadharshini M
              </span>
            </h2>
          </div>
          <div className="text-[#b70048] font-black">
            <TypeAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
