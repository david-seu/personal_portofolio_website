import './App.css';
import React from 'react';
import NavBar from './Pages/Home/NavBar';
import Home from './Pages/Home/Homescreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Home /> */}
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
