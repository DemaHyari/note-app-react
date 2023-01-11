import React, { useState } from 'react';
import classNames from "classnames";
import Button from '../../UI/Button/Button';
import './CourseInput.css';

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
        className={classNames("form-control", {
          "form-control--invalid": isValid,
        })}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
