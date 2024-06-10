// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    setTasks([...tasks, { text: newTask, state: 'started' }]);
    setNewTask('');
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, state: task.state === 'done' ? 'started' : 'done' } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleChangeTaskState = (index, newState) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, state: newState } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList 
        tasks={tasks} 
        onToggleTask={handleToggleTask} 
        onDeleteTask={handleDeleteTask} 
        onChangeTaskState={handleChangeTaskState}
      />
    </div>
  );
}

export default App;
