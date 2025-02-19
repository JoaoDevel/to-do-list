import React from "react";
import Tick from "../assets/tick.png";
import Not_tick from "../assets/not_tick.png";
import Delete from "../assets/delete.png";

const ToDoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img className="w-7" src={isComplete ? Tick : Not_tick} alt="" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => deleteTodo(id)}
        src={Delete}
        alt=""
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default ToDoItems;
