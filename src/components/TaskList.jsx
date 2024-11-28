import React from "react";
import PropTypes from "prop-types";

const TaskList = ({ tasks, onEdit }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => onEdit(task)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskList;
