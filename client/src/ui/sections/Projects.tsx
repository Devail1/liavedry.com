import { TProject } from "@/types";
import React from "react";

function Projects({ projects }: { projects: TProject[] }) {
  return (
    <div>
      <h3 className="text-2xl font-medium md:mb-2 md:text-3xl">Projects</h3>
      {projects?.map((project) => (
        <div className="py-2" key={project.name}>
          <a href={project.linkHref} target="_blank" rel="noreferrer">
            <p className="font-semibold md:text-base">{project.name}</p>
          </a>
          <p className="text-muted">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
