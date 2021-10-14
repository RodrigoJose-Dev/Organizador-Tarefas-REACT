import React from "react";

import "./Task.css";

const Task = ({ task, handleTaskClickStatus }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}} //troca o style caso completed seja true
    >
      <div
        className="task-title"
        onClick={() => handleTaskClickStatus(task.id)}
      >
        {task.title}
      </div>
    </div>
  );
  // return <div className="task-container">{task.title}</div>;
};

export default Task;
