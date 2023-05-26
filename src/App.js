
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ExcerciseDetail from "./pages/ExcerciseDetail";

function App() {
  return (
    <div className="home">
        
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/excercise/:id" element={<ExcerciseDetail/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
