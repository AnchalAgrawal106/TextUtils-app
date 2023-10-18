import React, { useState } from "react";
import "./App.css";

import About from "./Components/About";
import Navbar from "./Components/Navbar";
// import Navbar1test from "./Components/Navbar1test";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is eabled or not
  const [alert, setAlert] = useState(null); //Whether dark mode is eabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#072038";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#072038";
  //     showAlert("Dark mode has been enabled", "success");
  //   } else if (mode === "dark"){
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // };

  return (
    <>
    <Router>
      {/* <Navbar title="TextUtils" aboutText="About"/> */}

      <Navbar title="TestUtils Imp" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar1test title="TestUtils Imp" mode={mode} toggleMode={toggleMode} /> */}
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element = {<About mode = {mode}/>}/>
          <Route exact path="/" element = {<TextForm
          showAlert={showAlert}
          heading="Try TextUtils- Word counter, Character counter, Remove extra spaces"
          mode={mode} 
        />}/>
        </Routes>
       
      
      </div>
      </Router>
    </>
  );
}

export default App;
