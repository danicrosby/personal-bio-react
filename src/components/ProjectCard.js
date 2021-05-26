import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  CardImg,
  Button,
  Card,
  CardText,
  CardTitle,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProject } from '../helpers/data/ProjectData';
import ProjectForm from './ProjectForm';

const ProjectCard = ({
  firebaseKey,
  image,
  name,
  description,
  setProjects
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProject(firebaseKey)
          .then(setProjects);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/player/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
      <CardImg src={image} rounded fluid />
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>{description}</CardText>
      <Button color="light" onClick={() => handleClick('view')}>View</Button>
      <Button color="light" onClick={() => handleClick('delete')}>Delete</Button>
      <Button color="light" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Edit'}
      </Button>
      {
        editing && <ProjectForm
          formTitle='Edit Project'
          setProjects={setProjects}
          firebaseKey={firebaseKey}
          image={image}
          name={name}
          description={description}
        />
      }
    </Card>
  );
};

ProjectCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setProjects: PropTypes.func
};

export default ProjectCard;
