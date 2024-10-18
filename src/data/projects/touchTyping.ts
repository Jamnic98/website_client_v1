import { LinkType, ProjectDataType } from 'types'

const touchTyping: ProjectDataType = {
	id: 'touch-typing',
	title: 'Touch Typing',
	summary: 'A program to improve typing speed and accuracy.',
	paragraphs: [
		`The idea behind this project was to create an application that would analyse a user's typing patterns and provide targeted words containing letter combinations they struggled with, aiming to accelerate their typing improvement.`,
		`To test this hypothesis, I developed a typing interface using React and Node.js that randomly selected words for the user to type. The application tracked hits and misses for individual letters and letter combinations, storing the data in a JSON file for later analysis.`,
		`After gathering my own typing data through practice sessions, I wrote a Python script to extract and analyse the data from the JSON file, visualising the results with Matplotlib. While I initially planned to develop the app into a fully-fledged website, I paused the project as I felt the final concept was too similar to an existing site I had drawn inspiration from.`,
		`This project demonstrates my ability to design experimental applications, work with data collection and analysis, and combine front-end development with back-end data processing.`,
	],
	projectPageURI: '/projects/touch-typing',
	screenshotURIs: [
		'/images/projects/touch-typing.png',
		'/images/projects/touch-typing-graph.png',
	],
	mainLanguage: 'JavaScript',
	links: [
		{
			URL: 'https://github.com/Jamnic98/touch-typing',
			label: 'GitHub link',
			type: LinkType.EXTERNAL,
		},
	],
	techStack: [
		'React',
		'React Testing Library',
		'Jest',
		'HTML',
		'CSS',
		'Node.js',
		'Express.js',
		'Python',
		'Matplotlib',
		'JSON',
	],
}

export default touchTyping
