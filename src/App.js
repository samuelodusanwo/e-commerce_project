import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {HomePage} from './page/homepage/homepage.component';
import './App.scss';

// const HatsPage = () => (
//   <div>
//     <h1>Hello Hats</h1>
//   </div>
// )

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;