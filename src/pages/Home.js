import React from "react";
import Navbar from "../components/Navbar";
import SearchExercises from "../components/SearchExercises";

const Home = () => {
  return (
    <>
      <div className="hero">
        <Navbar />
        <div className="hero-text">
          SHAPE YOUR BODY <br />
          <div className="main-text">
            BE <span>STRONG</span> <br /> TRAINING HARD
          </div>
          <button id="explore">Explore Excercises</button>
        </div>
      </div>
      <SearchExercises />
    </>
  );
};

export default Home;
