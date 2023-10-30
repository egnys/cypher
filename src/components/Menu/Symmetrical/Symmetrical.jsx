import React from "react";
import { Link } from "react-router-dom";
const Symmetrical = (props) => {
  return (
    <div>
      <div className="grid gap-9 lg:grid-cols-3 sm:grid-cols-1 my-20 px-24 text-lg">
        {props.symNames.map((component) => {
          return (
            <Link
              className="h-20 shadow-lg text-xl border-b-4 hover:border-b-4 hover:border-lime-300 hover:text-sky-500 transition delay-75 bg-violet-100 flex items-center justify-center"
              to={"/" + component.link}
            >
              {component.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Symmetrical;
