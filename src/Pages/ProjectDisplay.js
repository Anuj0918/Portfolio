import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../constants/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon/>
      <div>
        <a href={project.demo}>Github</a>
      </div>
    </div>
  );
}

export default ProjectDisplay;