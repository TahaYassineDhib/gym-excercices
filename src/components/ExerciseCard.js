import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    // <Link to={`/exercise/${exercise.id}`}>
      <div className="exercise-card">
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <button className="body-part">
          {exercise.bodyPart}
        </button>
        <button className="target-muscle">
          {exercise.target}
        </button>
        <p className="exercise-name">{exercise.name}</p>
      </div>
    // </Link>
  );
};

export default ExerciseCard;
