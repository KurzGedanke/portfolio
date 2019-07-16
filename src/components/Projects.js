import React from 'react';
import projects from './projects.json'

export default class Projects extends React.Component{
    constructor(props){
        super(props);
        this.project = projects;
    }
    render() {
        const projects = this.project.map((project) => {
            return (
            <div>
                <h2>{project.name}</h2>
                <h2>{project.plattform}</h2>
            </div>
            )
        }
        )
        return(
            <div className="projects">
                {projects}
            </div>
        )
    }
}