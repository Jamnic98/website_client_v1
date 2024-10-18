import { LinkType, ProjectDataType } from 'types'

const pyramidSolitaire: ProjectDataType = {
	id: 'pyramid-solitaire',
	title: 'Pyramid Solitaire',
	summary: 'A program based on a variation of the card game, solitaire.',
	paragraphs: [
		`This program, written in Python using the Pygame library, features sprite animations programmed with vector mathematics. It also includes functionality to detect when no further moves are available, providing a smooth and responsive gameplay experience.`,
		`This project demonstrates my ability to integrate graphics and physics-based calculations, as well as my focus on creating engaging, interactive applications. It showcases my early experience with game development and problem-solving using Python.`,
	],
	projectPageURI: '/projects/pyramid-solitaire',
	screenshotURIs: [
		'/images/projects/pyramid-solitaire.png',
		'/images/projects/pyramid-solitaire-end-game.png',
		'/images/projects/pyramid-solitaire-start-screen.png',
	],
	mainLanguage: 'Python',
	links: [
		{
			label: 'GitHub link',
			URL: 'https://github.com/Jamnic98/pyramid-solitaire',
			type: LinkType.EXTERNAL,
		},
	],
	techStack: ['Python', 'Pygame'],
}

export default pyramidSolitaire
