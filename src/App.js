import React, { useState } from "react";

import "./App.css";
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

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;
