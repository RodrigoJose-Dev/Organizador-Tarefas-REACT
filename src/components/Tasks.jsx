import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClickStatus }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} handleTaskClickStatus={handleTaskClickStatus} />
      ))}
    </>
  );
};

export default Tasks;
