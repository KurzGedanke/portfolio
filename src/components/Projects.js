import React from 'react';
import projects from './projects.json'
import './css/projects.css'

export default class Projects extends React.Component{
    constructor(props){
        super(props);
        this.project = projects;
    }
    render() {
        const projects = this.project.map((project) => {
            return (
            <div className="project">
                <h2 className="project-name">{project.name}</h2>
                <p className="project-plattform">{project.plattform}</p>
                <a href={project.url} className="project-website">Website</a>
                <a href={project.github} className="project-github">GitHub</a>
                <p className="project-description">{project.description}</p>
                <ul className="project-tools">
                {project.tools.map((tool) => {
                        return <li className="project-tool">{tool}</li>
                    })}
                </ul>
                <p className="project-license">{project.license}</p>
            </div>
            )
        }
        )
        return(
            <div className="projects">
                <h1>Coding Projects</h1>
                {projects}
            </div>
        )
    }
}