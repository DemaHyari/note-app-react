import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0){
      setIsValid(true);
      return;
    } 
    props.onAddGoal(enteredValue);
    setIsValid(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`
          ${styles["form-control"]} 
          ${isValid && styles["form-control--invalid"]}
        `}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
