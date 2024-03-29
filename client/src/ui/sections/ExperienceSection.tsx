import clsx from "clsx";
import React from "react";

function ExperienceSection() {
  const experiences = [
    {
      role: "Frontend Developer",
      companyName: "Rexail",
      dates: "2022 - 2023",
      tags: ["React", "Redux", "TypeScript", "Next.js", "MUI", "Docker", "AWS"],
    },
    {
      role: "Frontend Developer",
      companyName: "NOWGUA",
      dates: "2020 - 2022",
      tags: ["React", "Storybook", "ElasticSearch", "Redux", "SCSS"],
    },
    {
      role: "Operations Manager",
      companyName: "MyPlay",
      dates: "2016 - 2020",
      tags: ["Cost Reduction", "Streamlining Operations", "Project Management"],
    },
  ];

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
      <h3 className="text-xl font-medium md:mb-2 md:text-3xl">Experience</h3>
      {experiences.map((experience) => (
        <div
          key={experience.companyName}
          className="space-y-2 rounded-lg bg-base-100/10 py-4"
        >
          <div className="mb-2">
            <p className="text-lg font-bold">{experience.role}</p>
            <p className="text-gray-500 underline">{experience.companyName}</p>
            <p className="text-gray-500">{experience.dates}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <div
                key={tag}
                className={clsx("badge rounded-lg py-3", getTagColor(tag))}
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

export default ExperienceSection;
