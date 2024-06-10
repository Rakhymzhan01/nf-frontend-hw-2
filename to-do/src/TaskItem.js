// src/TaskItem.js
import React from 'react';

function TaskItem({ task, onToggle, onDelete, onChangeState }) {
  const getStateClass = (state) => {
    switch(state) {
      case 'started':
        return 'task-status started';
      case 'in-process':
        return 'task-status in-process';
      case 'done':
        return 'task-status done';
      default:
        return '';
    }
  };

  return (
    <li>
      <span 
        className={`task-text ${task.state === 'done' ? 'completed' : ''}`}
        onClick={onToggle}
      >
        {task.text}
      </span>
      <div className="task-actions">
        <span className={getStateClass(task.state)}>{task.state}</span>
        <select 
          onChange={(e) => onChangeState(e.target.value)} 
          value={task.state}
        >
          <option value="started">Started</option>
          <option value="in-process">In Process</option>
          <option value="done">Done</option>
        </select>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
