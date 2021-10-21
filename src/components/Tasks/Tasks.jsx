import React from "react";

import Task from "../Task/Task";

const Tasks = ({ tasks, handleTaskClickStatus, handleTaskDel }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskClickStatus={handleTaskClickStatus}
          handleTaskDel={handleTaskDel}
        />
      ))}
    </>
  );
};

export default Tasks;
