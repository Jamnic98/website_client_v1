export type NavlinkData = { label: string; url: string; children: navlinkObj[] }

export type ProjectLinkData = { URL: string; label: string; type: string }

export type ProjectData = {
  id: string
  title: string
  shortDescription: string
  longDescription: string[]
  projectPageURI: string
  screenshotURIs: string[]
  mainLanguage: string
  links: ProjectLinkData[]
  techStack: string[]
}

export type RunData = {
  distance: number
  duration: number
  start_date_local: date
}
