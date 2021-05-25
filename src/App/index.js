import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import NavBar from '../components/NavBar';
import { getProjects } from '../helpers/data/ProjectData';
import Routes from '../helpers/Routes';

function App() {
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(null);

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
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} />
      <Routes
        projects={projects}
        setProjects={setProjects}
      />
    </>
  );
}

export default App;
