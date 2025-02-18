import React from "react";
import Icon from "../assets/todo_icon.png";

const Todo = () => {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* ----- Title ----- */}

      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={Icon} alt="" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
    </div>
  );
};

export default Todo;
