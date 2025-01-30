import "./ProjectCard.css";
import { TechIcon } from "../TechIcon/TechIcon";

export const ProjectCard = (project) => `
<div class="project-card">
  <img src="/img/projects/${project.image}.png
  " alt=${project.title}/>
  <div class="header">
    <h2>${project.title}</h2>
    <div>
      <a href=${project.repoUrl} target="_blank" rel"noopener noreferrer">
        <img src="/icons/github.jpg" alt="GitHub Icon" />
      </a>
      <a href=${project.liveUrl} target="_blank" rel"noopener noreferrer">
        <img src="/icons/link.jpg" alt="Link icon" />
      </a>
    </div>
  </div>

  <div class="detail">
    <p>${project.description}</p>
    <div class="techs">
     ${TechIcon(project.tech)}
    </div>
  </div>
</div>`;
