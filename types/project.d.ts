export type ProjectLinkData = { URL: string; label: string; type: string };

export type ProjectData = {
  id: string;
  title: string;
  summary: string;
  paragraphs: string[];
  projectPageURI: string;
  screenshotURIs: string[];
  mainLanguage: string;
  links: ProjectLinkData[];
  techStack: string[];
};
