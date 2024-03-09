/** @type {import('prettier').Config} */
const config = {
	printWidth: 100,
	useTabs: true,
	tabWidth: 4,
	singleQuote: true,
	trailingComma: 'es5',
	semi: true,
	overrides: [
		{
			files: '*.json',
			options: {
				parser: 'json',
				tabWidth: 4,
				useTabs: true,
			},
		},
	],
	plugins: ['prettier-plugin-tailwindcss'],
	// parser: 'typescript',
};

export default config;
