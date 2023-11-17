import nextJest from 'next/jest'

const createJestConfig = nextJest({
	dir: './',
})

const customJestConfig = {
	setupFilesAfterEnv: ['./support/jest.setup.ts'],
	setupFiles: ['./support/environment.ts'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(customJestConfig)
