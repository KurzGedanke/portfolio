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
                <h2>{project.name}</h2>
                <span>{project.plattform}</span>
                <a href={project.url}>Website</a>
                <a href={project.github}>GitHub</a>
                <span>{project.description}</span>
                <span>{project.tools}</span>
                <span>{project.license}</span>
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