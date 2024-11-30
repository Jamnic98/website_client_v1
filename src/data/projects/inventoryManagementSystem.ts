import { Project, LinkType } from 'types'

const inventoryManagementSystem: Project = {
	id: 'inventory-management-system',
	title: 'Inventory Management System',
	summary: 'A M.E.R.N stack app for tracking inventory.',
	paragraphs: [
		`This application was designed for environments such as homes, schools, or offices, with the goal of providing an easy-to-use inventory management system accessible by clients on the local network. Using Material-UI, I developed a fully responsive interface that works seamlessly on both desktop and mobile devices. The user interface is split into three key sections: the main table, the expiring soon panel, and the low stock panel.`,
		`The main table displays all inventory items and includes a search bar, along with options to perform CRUD (Create, Read, Update, Delete) operations. Each item in the inventory has attributes such as item name, quantity, room, location, expiration date, and low stock alert. Items with an expiration date are automatically tracked by the program and moved to the expiring soon panel when their expiration is two weeks or less away. Every day, the program compiles a list of items expiring the following day and notifies all users via email alerts.`,
		`Items marked with the low stock alert are also monitored. When the item quantity drops to 1, it is added to the low stock panel. From there, users can opt to send a low stock alert, which will email a predefined list of recipients with the details of items needing replenishment.`,
		`This project highlights my ability to design and implement user-friendly, responsive applications with complex, automated backend functionality. By integrating features like automated email notifications and inventory tracking, I ensured that the system provided both convenience and efficiency for users.`,
	],
	projectPageURI: '/projects/inventory-management-system',
	screenshotURIs: [
		'/images/projects/ims.png',
		'/images/projects/edit-item-modal.png',
		'/images/projects/remove-item-modal.png',
		'/images/projects/email-settings.png',
	],
	mainLanguage: 'JavaScript',
	links: [
		{
			label: 'GitHub link',
			URL: 'https://github.com/Jamnic98/inventory-management-system',
			type: LinkType.EXTERNAL,
		},
	],
	techStack: [
		'JavaScript',
		'React',
		'React Testing Library',
		'Jest',
		'HTML',
		'CSS',
		'Node.js',
		'Express.js',
		'MongoDB Atlas',
		'Mongoose',
		'MaterialUI',
	],
}

export default inventoryManagementSystem
