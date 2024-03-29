import { TExperience } from "@/types";
import clsx from "clsx";
import React from "react";

function Experience({ experiences }: { experiences: TExperience[] }) {
  const getTagColor = (tag) => {
    switch (tag.toLowerCase()) {
      case "react":
        return "badge-primary";
      case "redux":
        return "badge-secondary";
      case "typescript":
        return "badge-accent";
      case "next.js":
        return "badge-ghost";
      case "mui":
        return "badge-info";
      case "docker":
        return "badge-accent";
      case "aws":
        return "badge-warning";
      case "storybook":
        return "badge-primary";
      case "elasticsearch":
      case "scss":
        return "badge-error";
      default:
        return "badge-neutral ";
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-medium md:mb-2 md:text-3xl">Experience</h3>
      {experiences.map((experience) => (
        <div
          key={experience.companyName}
          className="space-y-2 rounded-lg bg-base-100/10 py-4"
        >
          <div className="mb-2">
            <p className="font-semibold md:text-lg">{experience.role}</p>
            <a href={experience.companyLink} target="_blank">
              <p className="text-gray-500 underline">
                {experience.companyName}
              </p>
            </a>
            <p className="text-gray-500">{experience.dates}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <div
                key={tag}
                className={clsx(
                  "badge rounded-lg px-2 py-1 text-xs font-medium",
                  getTagColor(tag)
                )}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
