import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import './App.css';


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
    setTaskToEdit(null); // Clear the form
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
      </div>
    </div>
  );
};

export default App;






