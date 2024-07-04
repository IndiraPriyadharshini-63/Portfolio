import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <div className=" flex   justify-center items-center">
      <ul className="flex ">
        <li>
          <a href="https://linkedin.com/">
            <FaLinkedin size={40} color="blue" />
          </a>
        </li>
        <li>
          <a href="https://github.com/IndiraPriyadharshini-63">
            <FaGithub size={40} color="black" />
          </a>
        </li>
        <li>
          <a href="mailto:indirapriyadharshinimary@gmail.com">
            <HiOutlineMail size={40} color="red" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Contact;
