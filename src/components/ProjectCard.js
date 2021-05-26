import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  CardImg,
  Button,
  Card,
  CardText,
  CardTitle,
} from 'reactstrap';
import PropTypes from 'prop-types';

const ProjectCard = ({
  firebaseKey,
  image,
  name,
  description,
}) => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/projects/${firebaseKey}`);
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
      <Button color="light" onClick={() => handleClick('view')}>View Project</Button>
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
