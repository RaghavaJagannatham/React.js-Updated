import React from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Addbackup from './Components/Addbackup';
// import Trailerreadiness from './Components/Trailerreadiness';
// import Nothers from './Components/Nothers';
import Addbackupdata from './DataStorage/AddbackupData';
import DashboardPage from './DataStorage/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Addbackup" element={<Addbackup />} />
        <Route path="/Trailerreadiness" element={<Trailerreadiness />} />
        <Route path="/Nothers" element={<Nothers />} /> */}
        <Route path="/DashboardPage" element={<DashboardPage />} />
        <Route path="/AddbackupData" element={<Addbackupdata />} />
      </Routes>
    </Router>
  );
}


export default App;
