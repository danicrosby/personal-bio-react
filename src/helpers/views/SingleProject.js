import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleProjectCard from '../../components/SingleProjectCard';
import { getSingleProject } from '../data/ProjectData';

export default function SingleProject() {
  const [project, setProject] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleProject(firebaseKey)
      .then(setProject);
  }, []);

  return (
    <div>
      <SingleProjectCard project={project}>
        <img scr="{project.image}" />
        <h2>{project.name}</h2>
        <h3>{project.description}</h3>
      </SingleProjectCard>
    </div>
  );
}
