import React, { useEffect, useState } from 'react';
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
    
    useEffect(() => {
      // Your client credentials
      var your_client_id = "sbox1610381396";
  
      // Initialize OnSched with clientId and environment (sbox or live)
      var onsched = window.OnSched(your_client_id, "sbox");
  
      // Get instance of elements to use for creating elements
      var elements = onsched.elements();
  
      // Initialize availability parameters with serviceId (required), and
      // any additional optional parameters
      var availabilityParams = { locationId: '49d6e58d-56b9-40f8-82b3-0efeb02a337b', serviceId: '133282' };
  
      // Include any additional options (optional)
      var availabilityOptions = {};
      
      // Create the availability element
      var availability = elements.create("availability", availabilityParams, availabilityOptions);
      
      // Mount the element (which triggers the API)
      availability.mount("availability");
    }, [])

    return (
      <div>
        <div className="header">
            <h1 className="header__title">Projects </h1>
        </div>

        <div id="availability" style={{backgroundColor: "#F7F7F7"}}></div>

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