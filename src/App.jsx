import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";
import TaskDetails from "./components/TaskDetails/TaskDetails";

import "./App.css";

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

  //executa o bloco de código sempre que uma variável muda
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTasks(data);
    };
    fetchTasks();
  }, []); //-> lista de dependências

  //vai fazer a troca de status da task e vai retornar tudo dentro dela
  const handleTaskClickStatus = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      //se for verdadeiro efetua a mudança de completed da task
      return task; //se for false retorna apenas a task
    });

    setTasks(newTasks);
  };

  //adicionar task
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

  //remover task
  const handleTaskDel = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => {
            return (
              <>
                <AddTask handleTaskAdd={handleTaskAdd} />
                <Tasks
                  tasks={tasks}
                  handleTaskClickStatus={handleTaskClickStatus}
                  handleTaskDel={handleTaskDel}
                />
              </>
            );
          }}
        />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>

      <div style={{ color: "white", textAlign: "center" }}>
        <p>
          API utilizada para testes:{" "}
          <a
            style={{ textDecoration: "none", color: "chartreuse" }}
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
          >
            JSONPlaceholder
          </a>
        </p>
      </div>
    </BrowserRouter>
  );
};

export default App;
