import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import ContactUs from './component/ContactUs';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    let textBox = document.querySelector("#box");
    if (textBox) {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#404040';
        document.body.style.color = 'white';
        textBox.style.backgroundColor = '#404040';
        textBox.style.color = 'white';
        showAlert("Dark mode has been enabled", "success");
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        textBox.style.backgroundColor = 'white';
        textBox.style.color = 'black';
        showAlert("Light mode has been enabled", "success");
      }
    } else {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#404040';
        document.body.style.color = 'white';
        showAlert("Dark mode has been enabled", "success");
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        showAlert("Light mode has been enabled", "success");
      }
    }
  }

  
  return (
    <>
      <Router>
        <Navbar title="Text Utils" contactUs="Contact Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/ContactUs" element={<ContactUs showAlert={showAlert} toggleMode={toggleMode} mode={mode} />} />
            <Route path="/" element={<TextForm heading="Enter your text here." showAlert={showAlert} mode={mode}  /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
