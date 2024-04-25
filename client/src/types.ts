export type TPost = {
  id: number;
  slug: string;
  published: boolean;
  title: string;
  content: string;
  createdAt: string;
};

export type TExperience = {
  role: string;
  companyName: string;
  dates: string;
  tags: string[];
  companyLink: string;
};

export type TProject = {
  name: string;
  description: string;
  linkHref: string;
};
