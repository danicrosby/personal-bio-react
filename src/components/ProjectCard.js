import React, { useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProject } from '../helpers/data/ProjectData';
import ProjectForm from './ProjectForm';

const ProjectCard = ({
  firebaseKey,
  image,
  title,
  description,
  setProjects
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProject(firebaseKey)
          .then(setProjects);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
      <CardTitle tag="h5">{image}</CardTitle>
      <CardText>{title}</CardText>
      <CardText>{description}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Project</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit Project'}
      </Button>
      {
        editing && <ProjectForm
          formTitle='Edit Project'
          setProjects={setProjects}
          firebaseKey={firebaseKey}
          image={image}
          title={title}
          description={description}
        />
      }
    </Card>
  );
};

ProjectCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.number.isRequired,
  setProjects: PropTypes.func
};

export default ProjectCard;
