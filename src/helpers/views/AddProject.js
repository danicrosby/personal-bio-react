import React from 'react';
import PropTypes from 'prop-types';
import ProjectForm from '../components/ProjectForm';

function AddProject({ setProjects }) {
  return (
    <div>
      <ProjectForm
        formTitle='Add Project'
        setProjects={setProjects}
      />
    </div>
  );
}

AddProject.propTypes = {
  setProjects: PropTypes.func.isRequired
};

export default AddProject;
