export type NavlinkData = { label: string; url: string; children: navlinkObj[] }

export type ProjectData = {
  id: string
  title: string
  shortDescription: string
  longDescription: string[]
  projectPageURI: string
  screenshotURIs: string[]
  mainLanguage: string
  links: ProjectLink[]
  techStack: string[]
}

export type ProjectLink = { URL: string; label: string; type: string }

export type HeaderData = {
  title: string
  description?: string
}

export type RunData = {
  distance: number
  duration: number
  start_date_local: date
}
