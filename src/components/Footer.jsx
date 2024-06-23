import React from "react";
import Contact from "./Contact";

function Footer() {
  return (
    <div>
      <div name="footer" className="flex flex-row w-full h-[80px] absolute justify-center items-center  bg-[#ffffff] text-[#b70048] font-bold p-4">
        <div className=" flex  justify-center items-center">
          <div>Developed by Indira Priyadharshini M</div>
          <div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
