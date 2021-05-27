import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardTitle,
  CardImg
} from 'reactstrap';

export default function SingleProjectCard({ project }) {
  return (
    <Card body className="single-card">
      <CardImg className="card-img" top width="100%" src={project.image} />
      <CardTitle tag="h5">{project.name}</CardTitle>
      <CardText>{project.description}</CardText>
    </Card>
  );
}

SingleProjectCard.propTypes = {
  project: PropTypes.object
};
