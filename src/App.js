import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const markTaskComplete = (taskId, taskStatus) => {
    console.log('in markTaskComplete');
    // console.log(tasks);
    const newTaskList = [];
    for (const task of tasks) {
      if (task.id === taskId) {
        const updatedTask = { ...task, isComplete: taskStatus };
        newTaskList.push(updatedTask);
      } else {
        newTaskList.push(task);
      }
    }
    setTasks(newTaskList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {<TaskList tasks={tasks} markTaskComplete={markTaskComplete} />}
        </div>
      </main>
    </div>
  );
};

export default App;
