import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplitScreen from './components/SplitScreen';
import AnimePage from './components/AnimePage';
import CarsPage from './components/CarsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplitScreen />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/cars" element={<CarsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
