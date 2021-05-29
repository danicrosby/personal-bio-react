import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';

const ProjectCard = ({
  name,
  image,
  description,
  code,
}) => (
  <Card body>
    <CardImg className="project-image" src={image} fluid="true" />
    <CardTitle tag="h5">{name}<a href={code}><i className="fab fa-github-alt ml-3 fa-spin"></i></a></CardTitle>
    <CardText>{description}</CardText>
  </Card>
);

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default ProjectCard;
