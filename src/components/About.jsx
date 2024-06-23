import React from "react";
import MyResume from "../assets/Resume.pdf";
import { Button } from "@mui/material";
import { FiDownloadCloud } from "react-icons/fi";

function About() {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#fffff] text-[#b70048]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-[#D0D0D0] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full flex gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#ffffff]">
                Some Things About Me
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full flex gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              Hi. I'm Indira Priyadharshini M, nice to meet you. Please take a
              look around.
            </div>
            <div className="font-bold">
              <p>
                {" "}
                <p>
                  I love working as a Full Stack Developer and My tech stack
                  includes MongoDB, Express Js, NodeJs, React, TypeScript. I am
                  also familiar in PHP, MySQL.
                </p>
                <br />
                <p>
                  I am also proficient in C, C++, Java, Kotlin, Drupal, UX/UI
                  Design and love solving problems involving data structures and
                  algorithms
                </p>
              </p>
              <br />
              <p>
                Checkout my <span className="font-bold">resume</span> for more
                about me.{" "}
              </p>
            </div>
            <div>
              <a href={MyResume} target="_blank" rel="noreferrer">
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<FiDownloadCloud />}
                  style={{ marginBottom: "50px" }}
                >
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
