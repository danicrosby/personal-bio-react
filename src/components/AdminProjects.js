import React from 'react';
import PropTypes from 'prop-types';
import AdminProjectCard from './AdminProjectCard';

function AdminProjects({ projects, setProjects }) {
  return (
    <>
      <div className="card-container">
        {projects?.map((projectInfo) => (
          <AdminProjectCard
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

AdminProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired
};

export default AdminProjects;
