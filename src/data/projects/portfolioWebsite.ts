import { LinkType, Project } from 'types'

const portfolioWebsite: Project = {
  id: 'portfolio-website',
  title: 'Portfolio Website',
  summary: 'My portfolio website.',
  paragraphs: [
    `This is the second version of my portfolio website. The original version was a Single Page Application built with React and JavaScript.`,
    `Since I wanted a way of displaying my running activity and statistics I decided to implement a backend to create a full stack application which I originally implemented using Node.JS but recoded it in Python to simplify maintainance and integrating new features.`,
    `I also redesigned the front end to instead use Next.js and TypeScript. Project pages are generated dynamically from a template and a data file containing project information, streamlining the process of adding new content. I used the same method to create project 'cards' displayed on the main projects page.`,
    `For the running section, I set up a FastAPI server to load my running data from a MongoDB database. The data is visualised using D3.js, which generates a scatter plot of all the data points. The server checks twice daily for new data and updates the database accordingly. I deployed the server using AWS Elastic Beanstalk, ensuring it runs smoothly in the cloud.`,
  ],
  projectPageURI: '/projects/portfolio-website',
  screenshotURIs: [
    '/images/projects/portfolio-website.png',
    '/images/projects/portfolio-website-projects.png',
    '/images/projects/portfolio-website-about.png',
  ],
  mainLanguage: 'TypeScript',
  links: [
    {
      URL: 'https://github.com/Jamnic98/website-client',
      label: 'GitHub link (client)',
      type: LinkType.EXTERNAL,
    },
    {
      URL: 'https://github.com/Jamnic98/website-server',
      label: 'GitHub link (server)',
      type: LinkType.EXTERNAL,
    },
  ],
  techStack: [
    'TypeScript',
    'JavaScript',
    'Next.js',
    'React Testing Library',
    'Jest',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'MongoDB Atlas',
    'Mongoose',
    'AWS (Elastic Beanstalk, EC2)',
    'Vercel',
    'Strava API',
    'D3.js',
  ],
}

export default portfolioWebsite

// techStack: [
//   'TypeScript',
//   'Python (FastAPI)',
//   'Next.js',
//   'HTML',
//   'CSS',
//   'React Testing Library',
//   'Jest',
//   'MongoDB Atlas',
//   'AWS (Elastic Beanstalk, EC2)',
//   'Vercel',
//   'Strava API',
//   'D3.js',
// ],
