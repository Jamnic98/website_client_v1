import { LinkType, Project } from 'types'

const looseChangeCalculator: Project = {
	id: 'loose-change-calculator',
	title: 'Loose Change Calculator',
	summary: 'A calculator for summing loose change in GBP.',
	paragraphs: [
		`One of the first Python programs I developed,this application is a simple yet effective coin calculator designed for ease of use. The user inputs the number of coins for each denomination, and the calculator quickly returns the total value.`,
		`This project highlights my early proficiency with Python and my focus on creating intuitive solutions for everyday tasks. It laid the foundation for my problem-solving and programming skills, which I've since built upon with more advanced projects.`,
	],
	projectPageURI: '/projects/loose-change-calculator',
	screenshotURIs: ['/images/projects/loose-change-calculator.png'],
	mainLanguage: 'Python',
	links: [
		{
			label: 'GitHub link',
			URL: 'https://github.com/Jamnic98/loose-change-calculator',
			type: LinkType.EXTERNAL,
		},
	],
	techStack: ['Python', 'Tkinter'],
}

export default looseChangeCalculator
