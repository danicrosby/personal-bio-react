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
  techUsed
}) => (
  <Card body>
    <CardImg className="project-image mb-3" src={image} rounded fluid />
    <CardTitle tag="h5">{name}<a href={code}><i className="fab fa-github-alt ml-3 fa-spin"></i></a></CardTitle>
    <CardText>{description}</CardText>
    <CardText>{techUsed}</CardText>
  </Card>
);

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  techUsed: PropTypes.string.isRequired,

};

export default ProjectCard;
