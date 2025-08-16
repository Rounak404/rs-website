import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/AllProjects.css'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projectdata'

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null)


  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const handleClosePopup = () => {
    setSelectedProject(null)
  }

  return (
    <div className="all-projects-page">
      <div className="container">
        <h1 className="page-title">Our Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
              displayLearnMore={true}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-popup-overlay" onClick={handleClosePopup}>
          <div
            className="project-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={handleClosePopup}>
              ×
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="project-popup-image"
            />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.longdescription}</p>
            <div className="project-details">
              {/* <p>
                <strong>Status:</strong> {selectedProject.status}
              </p> */}
              <p>
                <strong>Technologies:</strong>{' '}
                {selectedProject.technologies.join(', ')}
              </p>
            </div>

            {/* ✅ Project Gallery Section */}
            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
              <div className="project-gallery">
                <h3>Project Gallery</h3>
                <div className="gallery-grid">
                  {selectedProject.gallery.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`Gallery image ${index + 1}`}
                      className="gallery-image"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default AllProjects
