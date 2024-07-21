import React from "react";
import MyResume from "../assets/Resume.pdf";
import { Button, styled } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function AboutV2() {
  return (
    <div id="about" className="flex flex-shrink-0 justify-center mt-0 mb-10">
      <div className="py-16 px-8 rounded-md bg-[#D0D0D0] flex flex-col justify-center items-center w-4/6 pt-8">
        <p className="text-4xl font-bold border-b-4 border-[#ffffff] justify-center text-[#b70048] ">
          Some Things About Me
        </p>
        <p className="text-[#b70048] text-xl font-bold pb-4 pt-4">
          Hi. I'm Indira Priyadharshini M, nice to meet you. Please take a look
          around.
        </p>
        <p className="text-[#b70048] font-medium pb-8">
          FullStack Developer 😊 always looking to challenge myself with new
          projects! Passionate and eager to learn, staying up-to-date with
          latest technologies. I have explored all the fields of software
          development from basic UI/UX to frontend and backend{" "}
        </p>
        <div className="flex ">
          <a className="mr-4" href={MyResume} download={true}>
            <ColorButton variant="contained">Resume</ColorButton>
          </a>
          <a className="mr-4  " href="https://linkedin.com/">
            <FaLinkedin size={40} color="blue" />
          </a>
          <a
            className="mr-4 "
            href="https://github.com/IndiraPriyadharshini-63"
          >
            <FaGithub size={40} color="black" />
          </a>
          <a
            className="mr-4 "
            href="mailto:indirapriyadharshini.mary@gmail.com"
          >
            <HiOutlineMail size={40} color="red" />
          </a>
        </div>
      </div>
    </div>
  );
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: green[500],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

export default AboutV2;
