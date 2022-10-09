import { Outlet, Route, Routes } from "react-router-dom";

import "./App.css";
import LogIn from "./components/Login";
import Home from "./components/Home.js";
import NavBar from "./components/navBar";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./config/firebase";
import { useDispatch } from "react-redux";
import { setSignOutState, setUserDetails } from "./config/authSlice";


const auth = getAuth(app)

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if(auth.currentUser)
    {
      dispatch(setUserDetails({
        name:auth.currentUser.displayName,
        email:auth.currentUser.email,
        photo:auth.currentUser.photoURL
      }))
    }
    else{
      dispatch(setSignOutState())
    }
  
  }, [auth])
  

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
