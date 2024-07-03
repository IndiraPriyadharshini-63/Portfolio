import React from "react";
import WorkList from "./WorkList";
import taskImage from "../assets/task.png";

function Work() {
  const [works, setWorks] = useState([
    {
      id: 0,
      image: taskImage,
      title: "Task Manager",
      description: "Web App which helps to create and manage daily tasks ",
      code_link: "https://github.com/IndiraPriyadharshini-63/REACT-CRUD",
    },
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
