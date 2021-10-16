import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

  //vai fazer a troca de status da task e vai retornar tudo dentro dela
  const handleTaskClickStatus = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      //se for verdadeiro efetua a mudança de completed da task
      return task; //se for false retorna apenas a task
    });

    setTasks(newTasks);
  };

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAdd={handleTaskAdd} />
        <Tasks tasks={tasks} handleTaskClickStatus={handleTaskClickStatus} />
      </div>
    </>
  );
};

export default App;
