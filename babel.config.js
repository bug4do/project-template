module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current'
				}
			}
		],
		'@babel/preset-typescript'
	],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					'@config': './config/config.json',
					'@entity': './src/entities',
					'@service': './src/services',
					'@repository': './src/repositories',
					'@provider': './src/providers',
					'@helper': './src/helpers',
					'@route': './src/routes'
				}
			}
		]
	],
	ignore: ['**/*.spec.ts']
};
