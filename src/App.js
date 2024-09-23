import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Login } from './Components/Login/Login'
import { Home } from './Components/Home/Home'

function App() {

  /*useEffect(() => {

    const data = {
        "Key": "asctest",
    };

    fetch('VCSync/PostListArea_Mas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify((data))
    }
    ).then(
        response => response.json()
    ).then(json => console.log(json))
    //   
}, [])*/

  return (
    <div className='app-bg-container'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home/*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
