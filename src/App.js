import { Outlet, Route, Routes } from "react-router-dom";

import "./App.css";
import LogIn from "./components/Login";
import Home from "./components/Home.js";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">  
        <Routes>
          <Route index path="/" element={<LogIn />} />
          <Route index path="/Home" element={<Home />} />
        </Routes>
      
    </div>
  );
}

export default App;
