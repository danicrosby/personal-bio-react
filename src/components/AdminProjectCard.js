import React, { useState } from 'react';
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

const AdminProjectCard = ({
  firebaseKey,
  image,
  name,
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
      <CardImg src={image} fluid="true" />
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>{description}</CardText>
      <Button className="buttons" color="light" onClick={() => handleClick('delete')}>Admin Delete</Button>
      <Button className="buttons" color="light" onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Admin Edit'}
      </Button>
      {
        editing && <ProjectForm
          formTitle='Edit Form'
          setPlayers={setProjects}
          firebaseKey={firebaseKey}
          name={name}
          description={description}
          image={image}
        />
      }
    </Card>
  );
};

AdminProjectCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setProjects: PropTypes.func
};

export default AdminProjectCard;
