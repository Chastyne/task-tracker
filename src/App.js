import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import './App.css';
import TaskList from "./components/TaskList";


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task }]);
  };

  // Update an existing task
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setTaskToEdit(null); 
  };
  return (
    
    <div className="container">
    <div className="tracker">
      <h1 >Task Tracker</h1>
      <TaskForm
        onAdd={addTask}
        onUpdate={updateTask}
        taskToEdit={taskToEdit}
      />
      <TaskList/>
      </div>
    </div>
  );
};

export default App;






