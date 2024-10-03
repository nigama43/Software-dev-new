
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import Form from './components/Form';
import Success from './components/Success';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Form />} />
          {/* <Route path="/success" element={<Success />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
