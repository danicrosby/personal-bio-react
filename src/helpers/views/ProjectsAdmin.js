import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../../components/ProjectCard';

function ProjectsAdmin({ projects, setProjects }) {
  return (
    <>
      <div className="card-container">
        {projects.map((projectInfo) => (
          <ProjectCard
            key={projectInfo.firebaseKey}
            firebaseKey={projectInfo.firebaseKey}
            image={projectInfo.image}
            name={projectInfo.name}
            description={projectInfo.description}
            setProjects={setProjects}
          />
        ))}
      </div>
    </>
  );
}

ProjectsAdmin.propTypes = {
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired
};

export default ProjectsAdmin;
