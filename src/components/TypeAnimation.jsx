import React from 'react';
import Typewriter from "typewriter-effect";

function TypeAnimation() {
  return (
      <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Full Stack Developer",
          "UX/UI Designer",
          "DSA Enthusiast",
          "Curious Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  )
}

export default TypeAnimation;
