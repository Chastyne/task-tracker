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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />
      <button type="submit">{taskToEdit ? "Update" : "Add"} Task</button>
    </form>
  );
};

TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  taskToEdit: PropTypes.object,
};

export default TaskForm;
