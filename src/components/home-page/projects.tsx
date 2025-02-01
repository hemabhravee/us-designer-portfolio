import { FunctionComponent } from "react";
import { Project } from "../../types/project.type";
import ProjectCard from "./project-card";

interface ProjectsProps {
  projects: Project[]
}

const Projects: FunctionComponent<ProjectsProps> = ({ projects }: ProjectsProps) => {
  return (<div
    className="grid grid-cols-2 gap-x-4 gap-y-14"
    style={{
      padding: "0px 40px"
    }}
  >
    {projects.map((project) => (<ProjectCard project={project} />))}
  </div>);
}

export default Projects;