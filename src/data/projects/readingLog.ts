import { LinkType, Project } from 'types'

const readingLog: Project = {
  id: 'reading-log',
  title: 'Reading Log',
  summary: 'A list of books the user has read, stored in a MySQL database.',
  paragraphs: [
    `This Java-based program interfaces with a MySQL database to manage a user's personal reading list, tracking both books they want to read and those they have finished. The program stores detailed information about each book, including the title, author, a rating out of 10, and personal comments.`,
    `The graphical user interface (GUI) was developed using the JavaFX library and features a search bar to filter through the stored books, making it easy for users to navigate their collection. This project highlights my skills in database management, Java development, and building intuitive user interfaces.`,
  ],
  projectPageURI: '/projects/reading-log',
  screenshotURIs: ['/images/projects/reading-log.jpg', '/images/projects/reading-log-move.png'],
  mainLanguage: 'Java',
  links: [
    {
      label: 'GitHub link',
      URL: 'https://github.com/Jamnic98/reading-log',
      type: LinkType.EXTERNAL,
    },
  ],
  techStack: ['Java', 'JavaFX', 'SQL', 'MySQL'],
}

export default readingLog
