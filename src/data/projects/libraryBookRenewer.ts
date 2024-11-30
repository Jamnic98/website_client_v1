import { LinkType, Project } from 'types'

const libraryBookRenewer: Project = {
	id: 'library-book-renewer',
	title: 'Library Book Renewer',
	summary: 'A web scraper that automatically renews my library books.',
	paragraphs: [
		`Written in Python this , automates the renewal of library books using the Selenium web scraping library. The idea originated as a bet with my sister, where I joked that I could write a program to renew my library loans automatically. I turned that challenge into a functional solution by creating a script that logs into my library account and renews any books due for return.`,
		`The program is currently deployed on a Raspberry Pi, running daily via a cron job to check for any upcoming due dates. When books are renewed, the program sends a confirmation email with details about the renewals. This system ensures that no books are missed for return, and eliminates the need for manual tracking.`,
		` demonstrates my ability to automate repetitive tasks using Python, while also leveraging tools like Selenium and Raspberry Pi for practical, real-world applications.`,
	],
	projectPageURI: '/projects/library-book-renewer',
	screenshotURIs: ['/images/projects/library-book-renewer-code.png'],
	mainLanguage: 'Python',
	links: [
		{
			label: 'GitHub link',
			URL: 'https://github.com/Jamnic98/library-book-auto-renewer',
			type: LinkType.EXTERNAL,
		},
	],
	techStack: ['Python', 'Selenium'],
}

export default libraryBookRenewer
