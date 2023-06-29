import React from "react";
// import ProjectsLists from "../component/ProjectsLists";
// import projectData from "../data/projects"
import ProjectCard from "../component/ProjectCard";

const Projects = () => {

// const [dataProject] = React.useState(projectData)

    return ( 
        <div className="flex flex-col mt-[51px]">
            <h1 className="text-center text-[50px] font-semibold">Latest Project</h1>
            <ProjectCard />
        </div>
     );
}
 
export default Projects;