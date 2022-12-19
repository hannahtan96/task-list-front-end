import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';
// import markTaskComplete

const Task = ({ key, id, title, isComplete, markTaskComplete }) => {
  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item" key={key}>
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => markTaskComplete(id, !isComplete)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  markTaskComplete: PropTypes.func.isRequired,
};

export default Task;
