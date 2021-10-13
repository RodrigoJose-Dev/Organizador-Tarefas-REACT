import React, { useState } from "react";

import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Limpar quarto",
      completed: false,
    },
    {
      id: "2",
      title: "Levar animal para passear",
      completed: true,
    },
    {
      id: "3",
      title: "Organizar projeto",
      completed: false,
    },
  ]);

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAdd={handleTaskAdd} />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;
