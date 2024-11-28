import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


const TaskForm = ({ onAdd, onUpdate, taskToEdit }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit); 
    } else {
      setTask({ title: "", description: "" }); 
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      onUpdate(task);
    } else {
      onAdd(task);
    }
    setTask({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
      <label>
        Title:
        <input
          type="text"
          placeholder="Task Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </label>
      <label>
        Description:
        <textarea
          placeholder="Task Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          required
          style={{  alignItems:"center", width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </label>
      <button type="submit" style={{ padding: "10px", backgroundColor: "peachpuff", color: "#000", border: "none", borderRadius: "4px" }}>
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  taskToEdit: PropTypes.object,
};

export default TaskForm;
