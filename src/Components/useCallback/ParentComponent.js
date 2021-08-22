import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

//here we are using useCallback hook
// because here when we click any of the button then all the components are re-redered again for avoiding this we used here React.memo to convert into high order components so that they can't be re-rendered unless their is some change

// but after using React.memo there is button component re-rendered again because Reference equality
// because the function before the re-rendered is different from the function after the re-rendered

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  //   here we are using useCallback
  const ageHandle = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const salaryHandler = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  const reset = () => {
    setAge(25);
    setSalary(50000);
  };

  return (
    <>
      <Title></Title>
      <Count text={"Age"} count={age}></Count>
      <Button func={ageHandle}>Increase Age</Button>
      <Count text={"Salary"} count={salary}></Count>
      <Button func={salaryHandler}>Increase Salary</Button>
    </>
  );
}

export default ParentComponent;
