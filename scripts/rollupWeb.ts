import versionInjector from 'rollup-plugin-version-injector';

export default {
	input: 'dist/web/index.js',
	output: [
		{
			file: './dist/web/index.js',
			format: 'cjs'
		}
	],
	plugins: [versionInjector()]
};
