import React, { useState } from 'react';
import { Button } from 'antd'
import ProjectItem from './ProjectItem'
import { projectsData , skillsData} from '../fixtures/projects'

const ProjectsPage = () => {

    const [projects] = useState(projectsData)   
    const [filteredProjects, setfilteredProjects] = useState(projectsData)
    const [skills] = useState(skillsData)

    const skillFilter = (skill) => {
        setfilteredProjects(projects.filter((project) => {
            return project.skills.includes(skill)
        }))
    }

    return (
      <div>
        <div className="header">
            <h1 className="header__title">Projects </h1>
        </div>
        <div className="button-list">
            {skills.map((skill) => (        
                <Button className="list__button" type="danger" shape="round" key={skill} onClick={() => {
                    skillFilter(skill)
                }}>{skill}</Button>
            ))}
            <Button className="list__button" type="primary" onClick={() => setfilteredProjects(projectsData)}>All</Button>
        </div>
        <div className="container">
            <div className="projects-list">

                {filteredProjects.map((filter) => (          
                    <ProjectItem project={filter} key={filter.title}/>
                )).sort()}
            
            </div>

        </div>

        
      </div>
    )
}

export { ProjectsPage as default }