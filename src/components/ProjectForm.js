import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addProject, updateProject } from '../helpers/data/ProjectData';

const ProjectForm = ({
  firebaseKey,
  formTitle,
  setProjects,
  image,
  title,
  description,
}) => {
  const [project, setProject] = useState({
    firebaseKey: firebaseKey || null,
    title: title || '',
    description: description || '',
    image: image || '',
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.title]:
        e.target.title === 'image' ? (e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then(setProjects);
    } else {
      addProject(project).then(setProjects);
      setProject({
        firebaseKey: null,
        title: '',
        description: '',
        image: '',
      });
    }
  };

  return (
    <div classtitle='projedt-form'>
      <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="title"></Label>
          <Input
            title='title'
            id='title'
            value={project.title}
            type='text'
            placeholder='Enter a project title'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="description"></Label>
          <Input
            title='description'
            id='description'
            value={project.description}
            type='text'
            placeholder='Enter a description title'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="image"></Label>
          <Input
            title='image'
            id='image'
            value={project.image}
            type='number'
            placeholder='Enter a image'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

ProjectForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setProjects: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.number,
  firebaseKey: PropTypes.string
};

export default ProjectForm;
