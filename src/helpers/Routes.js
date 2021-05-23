import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './views/Home';
import Projects from './views/Projects';
import Technologies from '../components/Technologies';

export default function Routes({ projects, setProjects }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/projects'
          component={() => <Projects projects={projects} setProjects={setProjects} />}
        />
        <Route
          path='/technologies'
          component={() => <Technologies setProjects={setProjects} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired
};
