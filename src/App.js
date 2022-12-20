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


function App() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error1">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form1 banner-login">
      <form onSubmit={handleSubmit}>
        <div className="input-container1">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container1">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container1">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>
          <NavBar />
          <Banner />
          <GPA />
          <Results />
          <Attendance />
          <Footer />
        </div> : renderForm}
      </div>
    </div>
  );

 
}

export default App;
