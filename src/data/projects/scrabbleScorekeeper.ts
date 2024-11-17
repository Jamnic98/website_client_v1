import { LinkType, ProjectDataType } from 'types'

const scrabbleScorekeeper: ProjectDataType = {
	id: 'scrabble-scorekeeper',
	title: 'Scrabble Scorekeeper',
	summary: 'A web program for calculating turn scores in Scrabble.',
	paragraphs: [
		`This React-based project was designed to enhance the Scrabble playing experience by automating the score calculation, making the game more enjoyable and less time-consuming.`,
		`It features an intuitive graphical user interface that includes a virtual Scrabble board and a table to display player scores. A built-in dictionary validates each word formed on the board. The board, table, and tiles are styled using CSS, providing a clean and user-friendly experience.`,
		`This project demonstrates my ability to build interactive web applications with a focus on user experience, front-end development, and problem-solving using React and CSS.`,
	],
	projectPageURI: '/projects/scrabble-scorekeeper',
	screenshotURIs: [
		'/images/projects/scrabble-tiles.png',
		'/images/projects/scrabble-table.png',
		'/images/projects/scrabble-board.png',
	],
	mainLanguage: 'TypeScript',
	links: [
		{
			label: 'project link',
			URL: 'https://scrabble-scorekeeper.netlify.app/',
			type: LinkType.EXTERNAL,
		},
		{
			label: 'GitHub link',
			URL: 'https://github.com/Jamnic98/scrabble-scorekeeper',
			type: LinkType.EXTERNAL,
		},
	],
	techStack: ['TypeScript', 'React', 'HTML', 'CSS'],
}

export default scrabbleScorekeeper
