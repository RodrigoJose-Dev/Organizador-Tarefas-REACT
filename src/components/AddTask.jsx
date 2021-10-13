import React, { useState } from "react";

import Button from "./Button";

import "./AddTask.css";

const AddTask = ({ handleTaskAdd }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value); //setando o valor dentro de setInputData
  };

  const handleTaskAddClick = () => {
    handleTaskAdd(inputData);
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData} //colocando valor no inputData
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleTaskAddClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
