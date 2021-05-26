import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getProjects } from '../helpers/data/ProjectData';
import Routes from '../helpers/Routes';

function App() {
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          name: authed.name,
          image: authed.image,
          description: authed.description,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      } else if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
      } else if (admin || admin === null) {
        setAdmin(false);
      }
    });
  }, []);

  return (
    <Router>
      <NavBar user={user} />
      <Routes
        projects={projects}
        setProjects={setProjects}
        user={user}
        admin={admin}
      />
    </Router>
  );
}

export default App;
