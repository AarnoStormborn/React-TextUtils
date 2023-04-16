import './App.css';
import Alert from './components/Alert';
import About from './components/About'; 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
  <Router>
    <Navbar title="TextUtils" button="Search" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm heading="Input" mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About creatorName="AarnoStormborn" purpose="Learning ReactJS" createdDate="Today" mode={mode} /> } />
      {/*  
       */}
      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
