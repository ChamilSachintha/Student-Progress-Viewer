import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { GPA } from './components/GPA';
import { Results } from './components/Results';
import { Footer } from './components/Footer';
import { Attendance } from './components/Attendance';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { AlignCenter } from 'react-bootstrap-icons';
import banner from "./assets/img/banner-login.png";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    setIsSubmitted(true);
  };

  // JSX code for login form
  const renderForm = (
    <div className="form1" id='form1'>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Student Progress Viewer</h3>
          <br></br>
          
<div className="input-container1">
          <label>Username </label>
          <input type="text" name="uname" />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container1">
          <label>Password </label>
          <input type="password" name="pass" />
          {/* {renderErrorMessage("pass")} */}
        </div>
        </div>
        <div className="button-container1">
          <input type="submit" />
        </div>
      </form>
      <img className="background-image" src={banner} alt="Image" />
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? (
          <div>
            <NavBar />
            <Banner />
            <GPA />
            <Results />
            <Attendance />
            <Footer />
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default App;
