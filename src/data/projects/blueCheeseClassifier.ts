import { LinkType, ProjectDataType } from 'types'

const blueCheeseClassifier: ProjectDataType = {
	id: 'blue-cheese-classifier',
	title: 'Blue Cheese Classifier',
	summary: 'An image classifier designed to identify blue cheese.',
	paragraphs: [
		`As part of an intermediate machine learning course, I was tasked with creating one of three projects: big data, image classification, or time series. I opted to build an image classifier, choosing to explore a unique challenge—distinguishing between blue cheese and regular cheese.`,
		`My goal was to train a model to identify the distinct characteristics of blue cheese while ensuring it could differentiate between intentionally mouldy blue cheese and regular cheese that had gone bad. Using the Keras Python library, I built a convolutional neural network (CNN) and trained it on a dataset of approximately 4,000 images of various cheese types, sourced via a web scraper from Google Images. The initial model achieved an accuracy of 87%.`,
		`Since many images contained additional objects beyond the cheese, I hypothesised that cropping the images to focus solely on the cheese might improve accuracy. Given the size of the dataset, manually cropping each image wasn’t feasible. Instead, I employed a pre-trained image classifier (trained on cheese images) to automatically detect and generate bounding boxes around the cheese. I then wrote a Python script to crop around the cheese's centre point and save the updated images.`,
		`After retraining the model with the refined dataset, I achieved a 6% increase in accuracy, demonstrating the effectiveness of optimising image quality in training data. This project not only improved my understanding of CNNs but also enhanced my skills in automation and data preprocessing, crucial for efficient model training.`,
	],
	projectPageURI: '/projects/blue-cheese-classifier',
	screenshotURIs: [
		'/images/projects/blue-cheese-classifier-image-classification.jpeg',
		'/images/projects/blue-cheese-classifier-results-graph.png',
	],
	mainLanguage: 'Python',
	links: [
		{
			label: 'GitHub link',
			URL: 'https://github.com/Jamnic98/blue-cheese-classifier',
			type: LinkType.EXTERNAL,
		},
	],
	techStack: [
		'Python',
		'Keras',
		'TensorFlow',
		'OpenCV',
		'Matplotlib',
		'NumPy',
		'scikit-learn',
	],
}

export default blueCheeseClassifier
