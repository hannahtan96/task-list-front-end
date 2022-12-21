import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = (props) => {
  const INITIALFORMDATA = { title: 'new task', description: 'new description' };

  const [formData, setFormData] = useState(INITIALFORMDATA);

  const handleChange = (e) => {
    const NewFormData = { ...formData, [e.target.name]: e.target.value };

    setFormData(NewFormData);
  };

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    props.addNewTaskCallback(formData);
  };

  return (
    <form onSubmit={handleNewTaskSubmit}>
      <label htmlFor="title">New Task Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      ></input>
      <label htmlFor="description">New Task Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      ></input>
      <input type="submit" value="Add Task"></input>
    </form>
  );
};

NewTaskForm.propTypes = {
  addNewTaskCallback: PropTypes.func.isRequired,
};

export default NewTaskForm;
