import React from "react";

import "./Task.css";

const Task = ({ task, handleTaskClickStatus, handleTaskDel }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div
        className="task-title"
        onClick={() => handleTaskClickStatus(task.id)}
      >
        {task.title}
      </div>
      <div className="buttons-container">
        <button
          className="remove-task-btn"
          onClick={() => handleTaskDel(task.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
