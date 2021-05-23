import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getProjects } from '../helpers/data/ProjectData';
import Routes from '../helpers/Routes';

function App() {
  const [projects, setProjects] = useState([]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes
          projects={projects}
          setStudents={setStudents}
        />
      </Router>
    </>
  );
}

export default App;
