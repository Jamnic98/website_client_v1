type navlinkObjType = { label: string; url: string; children: navlinkObj[] };

type projectObjType = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  projectPageURI: string;
  screenshotURIs: string[];
  mainLanguage: string;
  links: projectLinkObjType[];
  techStack: string[];
};

type projectLinkObjType = { URL: string; label: string; type: string };

type headerObjType = {
  title: string;
  description: string | null;
};

type runDataType = {
  distance: number;
  duration: number;
  start_date_local: date;
};

export { navlinkObjType, projectObjType, projectLinkObjType, headerObjType, runDataType };
