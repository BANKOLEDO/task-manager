// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// import TaskInput from "./TaskInput";
// import TaskList from "./TaskList";
import React, { createContext } from 'react';
import ParentComponent from './ParentComponent';
import { UserContext } from './UserContext';

function App() {
  // const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState("");

  // const handleAddTask = () => {
  //   if (newTask.trim() === "") return;
  //   setTasks([...tasks, { text: newTask, completed: false }]);
  //   setNewTask("");
  // };

  // const handleToggleComplete = (index) => {
  //   const updatedTasks = tasks.map((task, i) => {
  //     return i === index ? { ...task, completed: !task.completed } : task;
  //   });
  //   setTasks(updatedTasks);
  // };

  // const handleDeleteTask = (index) => {
  //   const updatedTasks = tasks.filter((_, i) => {
  //     return i !== index;
  //   });
  //   setTasks(updatedTasks);
  // };
  // return (
  //   <div className="App">
  //     <h1>Task Manager</h1>
  //     <TaskInput
  //       handleAddTask={handleAddTask}
  //       newTask={newTask}
  //       setNewTask={setNewTask}
  //     />
  //     <TaskList
  //       tasks={tasks}
  //       handleToggleComplete={handleToggleComplete}
  //       handleDeleteTask={handleDeleteTask}
  //     />
  //   </div>
  // );

  const user = { name: 'John Doe', age: 30};

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>App Component</h1>
        <ParentComponent />
      </div>
    </UserContext.Provider>
  );
}

export default App;