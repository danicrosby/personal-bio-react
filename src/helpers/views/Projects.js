import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../../components/ProjectCard';

function Projects({ projects, setProjects }) {
  return (
    <>
      <div className="card-container">
        {projects.map((projectInfo) => (
          <ProjectCard
            key={projectInfo.firebaseKey}
            firebaseKey={projectInfo.firebaseKey}
            image={projectInfo.image}
            title={projectInfo.title}
            description={projectInfo.description}
            setProjects={setProjects}
          />
        ))}
      </div>
    </>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired
};

export default Projects;
