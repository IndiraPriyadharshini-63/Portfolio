import React, { useState } from "react";
import WorkList from "./WorkList";
import taskImage from "../assets/task1.png";
import sortImage from "../assets/sorting.png";

function Work() {
  // eslint-disable-next-line
  const [works, setWorks] = useState([
    {
      id: 0,
      image: taskImage,
      title: "Task Manager",
      description: "Web App which helps to create and manage daily tasks ",
      code_link: "https://github.com/IndiraPriyadharshini-63/REACT-CRUD",
    },
    {
    id: 1,
    image: sortImage,
    title: "Sorting Visualizer",
    description: "Web application using React JS to visualize how various sorting algorithms work",
    code_link: "https://github.com/IndiraPriyadharshini-63/SortingVisualizer",
  }
  ]);
  return (
    <div name="work" className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <WorkList works={works} />
      </div>
    </div>
  );
}

export default Work;
