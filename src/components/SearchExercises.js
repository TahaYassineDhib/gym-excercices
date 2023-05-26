import React, { useState } from "react";
import { excerciseOptions, fetchData } from "../utils/fetchData";
import Exercises from "./Exercises";

const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises , setExercises] = useState([])
  const handleSearch = async () => {
    if (search) {
      const excerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/",
        excerciseOptions
      );
      const searchedExercises = excerciseData.filter(
        (excercise) => excercise.name.toLowerCase().includes(search)
        
      );
      setSearch('');
      setExercises(searchedExercises)
    }
  };
  return (
    <>
      <div className="search-text">
        Awesome Exercises You <br /> Should Now <br />
        <input
          type="text"
          placeholder="Search Excercise"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLocaleLowerCase());
          }}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        
      </div>
      <Exercises exercises={exercises} setExercises={setExercises}/>
    </>
  );
};

export default SearchExercises;
