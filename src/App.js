import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm.js';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const URL = 'http://127.0.0.1:5000/tasks';

  const getAllTasks = () => {
    axios
      .get(URL)
      .then((res) => {
        const taskAPIResCopy = res.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            description: task.description,
            isComplete: task.is_complete,
          };
        });
        setTasks(taskAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const URL = 'http://127.0.0.1:5000/tasks';
  useEffect(getAllTasks, []);

  const markTaskComplete = (taskId, taskStatus) => {
    console.log('in markTaskComplete');
    // console.log(tasks);
    const newTaskList = [];
    axios
      .patch(`${URL}/${taskId}/mark_complete`)
      .then((res) => {
        for (const task of tasks) {
          if (task.id === taskId) {
            const updatedTask = { ...task, isComplete: taskStatus };
            newTaskList.push(updatedTask);
          } else {
            newTaskList.push(task);
          }
        }
        setTasks(newTaskList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTask = (taskId) => {
    console.log('in deleteTask');
    const updatedTaskList = [];
    axios
      .delete(`${URL}/${taskId}`)
      .then((res) => {
        for (const task of tasks) {
          if (task.id !== taskId) {
            updatedTaskList.push(task);
          }
        }
        setTasks(updatedTaskList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewTask = (newTask) => {
    console.log(newTask);
    axios
      .post(URL, newTask)
      .then((res) => getAllTasks())
      .catch((err) => {
        console.log(err);
      });
  };

  // const getAllTasks = () => {
  //   axios
  //     .get(URL)
  //     .then((res) => {
  //       const taskAPIResCopy = res.data.map((task) => {
  //         return {
  //           id: task.id,
  //           title: task.title,
  //           description: task.description,
  //           isComplete: task.is_complete,
  //         };
  //       });
  //       setTasks(taskAPIResCopy);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasks}
            markTaskComplete={markTaskComplete}
            deleteTask={deleteTask}
          />
          <NewTaskForm addNewTaskCallback={addNewTask}></NewTaskForm>
        </div>
      </main>
    </div>
  );
};

export default App;
