import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getProjects } from '../helpers/data/ProjectData';
import Routes from '../helpers/Routes';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes
          projects={projects}
          setProjects={setProjects}
        />
      </Router>
    </>
  );
}

export default App;
