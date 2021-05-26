import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addProject, updateProject } from '../helpers/data/ProjectData';

const ProjectForm = ({
  firebaseKey,
  formTitle,
  image,
  name,
  description,
  uid
}) => {
  const [project, setProject] = useState({
    firebaseKey: firebaseKey || null,
    uid: uid || 0,
    name: name || '',
    description: description || '',
    image: image || '',
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'uid' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then(setProject);
    } else {
      addProject(project).then((response) => {
        setProject(response);
        history.push('/project');
      });

      setProject({
        name: '',
        description: '',
        uid: 0,
        firebaseKey: null
      });
    }
  };

  return (
    <div className='project-form'>
      <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="name"></Label>
          <Input
            name='name'
            id='name'
            value={project.name}
            type='text'
            placeholder='Enter a project name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="description"></Label>
          <Input
            name='description'
            id='description'
            value={project.description}
            type='text'
            placeholder='Enter a description'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="image"></Label>
          <Input
            name='image'
            id='image'
            value={project.image}
            type='text'
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
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string,
  uid: PropTypes.number,

};

export default ProjectForm;
