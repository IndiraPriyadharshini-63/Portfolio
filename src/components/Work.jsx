import React from "react";
import { works } from "../helper/helper";
import WorkList from "./WorkList";

function Work() {

  return (
    <div name="work" className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <WorkList works={works} />
      </div>
    </div>
  );
}

export default Work;
