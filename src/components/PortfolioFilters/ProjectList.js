import React from 'react';
import PropTypes from 'prop-types';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <img key={index} src={project.img} alt={project.category} />
      ))}
    </div>
  );
};
ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectList;
