import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClickStatus, handleTaskDel }) => {
  const history = useHistory();

  //indo ate os detalhes da tarefa utilizando o titulo dela como url
  const handleDetailsClick = () => {
    history.push(`${task.title}`);
  };

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
        <button className="task-info-btn" onClick={handleDetailsClick}>
          <CgInfo />
        </button>
        <button
          className="remove-task-btn"
          onClick={() => handleTaskDel(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
