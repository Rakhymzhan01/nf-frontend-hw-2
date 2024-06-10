// src/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask, onChangeTaskState }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          onToggle={() => onToggleTask(index)} 
          onDelete={() => onDeleteTask(index)} 
          onChangeState={(newState) => onChangeTaskState(index, newState)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
