/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/runs',
				destination: 'http://localhost:5000/runs',
			},
		]
	},
}
