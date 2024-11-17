import { ProjectDataType } from 'types'

const readingLog: ProjectDataType = {
	id: 'crypto-viewer',
	title: 'Crypto Viewer',
	summary: 'Displays real-time cryptocurrency price data.',
	paragraphs: [
		`In August 2021, I developed a strong interest in cryptocurrency investing and wanted a more efficient way to monitor Bitcoin and Ethereum prices without having to rely on constant online checks. To address this, I designed and built a custom monitoring system using a NodeMCU ESP-12 microcontroller, programmed in C++, and integrated with Coinbase's API to fetch real-time cryptocurrency prices in GBP.
		I initially implemented a 2.2-inch TFT display, which allowed multiple prices to be shown simultaneously, improving the user experience. When a component controlling the display failed after a month, I quickly adapted the project by switching to a 16x2 LCD screen. Despite the smaller display size, I optimised the code to cycle through the price data, giving the appearance of smooth scrolling and ensuring the system remained functional without compromising usability.
		This project not only showcased my proficiency in hardware and software integration but also demonstrated my ability to troubleshoot and innovate under constraints, turning setbacks into opportunities for creative problem-solving.`,
	],
	projectPageURI: '/projects/crypto-viewer',
	screenshotURIs: [
		'/images/projects/crypto-viewer.png',
		'/images/projects/crypto-viewer-pcb.png',
	],
	mainLanguage: 'C++',
	links: [],
	techStack: ['C++', 'NodeMCU ESP-12', '2.2" TFT', '16x2 LCD'],
}

export default readingLog
