import { FunctionComponent } from "react";
import { Project } from "../../types/project.type";
import { colors } from "../../constants/colors";

interface ProjectCardProps {
    project: Project
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }: ProjectCardProps) => {
  return (<div style={{
    width: "100%",
    // height: "472px",
    padding: "22px",
    display: 'flex',
    flexDirection: "column",
    backgroundColor: colors.darkerLightGreen,
    gap:  "20px"
  }}>
    <img src={project.image} style={{}} alt="project-image"/>
    <div style={{fontSize: "23px", fontWeight: "bold"}}>
      {project.heading}
    </div>
    <div>
      {project.text}
    </div>
  </div>);
}

export default ProjectCard;