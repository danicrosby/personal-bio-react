import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './views/Home';
import Projects from './views/Projects';
import Technologies from '../components/Technologies';
import AddProject from './views/AddProject';
import About from '../components/About';

export default function Routes({ admin, projects, setProjects }) {
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          component={Home}
        />
        <Route
          exact path='/about'
          component={About}
        />
        <Route
          exact path='/projects'
          component={() => <Projects
          projects={projects}
          setProjects={setProjects} />}
        />
        <Route
          path='/technologies'
          component={() => <Technologies
          setProjects={setProjects} />}
        />
        <Route
          path='/add-project'
          component={() => <AddProject
          setProjects={setProjects} />}
          admin={admin}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  admin: PropTypes.any,
};
