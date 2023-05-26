import React from "react";

import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises }) => {
  console.log(exercises);
  return (
    <>
      <h3 className="showing-text">Showing Exercises</h3>
      <div className="exercises">
        {exercises.map((item, index) => (
          <ExerciseCard key={index} exercise={item} />
        ))}
      </div>
    </>
  );
};

export default Exercises;
