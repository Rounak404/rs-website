import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard'; 

const latestProjectsData = [
  {
    id: 1,
    title: 'AMR',
    description: 'Developing a Mars rover prototype with autonomous navigation capabilities.',
    image: '/projects/amr.jpg',
  },
  {
    id: 2,
    title: 'UAV',
    description: '6-axis robotic arm with computer vision for object manipulation.',
    image: '/projects/uav.jpg',
  },
  {
    id: 3,
    title: 'SLV',
    description: 'An autonomous water-surface vehicle designed for efficient seafloor mapping and remote operations using GPS and magnetometer guidance.',
    image: '/projects/slv.jpg',
  }
];

const LatestProjectsSection = ({ onProjectClick }) => {
  return (
    <section className="latest-projects">
      <div className="container">
        <h2 className="section-title">Latest Projects</h2>
        <div className="projects-grid">
          {latestProjectsData.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onProjectClick={onProjectClick} 
              displayLearnMore={false} 
            />
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/projects" className="btn btn-primary">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default LatestProjectsSection;