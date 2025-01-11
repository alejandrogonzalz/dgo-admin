module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-leading-blank': [2, 'always'],
		'body-max-line-length': [2, 'always', 200],
		'header-max-length': [2, 'always', 200],
		'scope-empty': [2, 'never'],
		'subject-case': [
			2,
			'always',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
	},
	plugins: [
		{
			rules: {
				'pop-rule': ({ scope }) => {
					const RELEASE = 'release';
					const DGO = 'DGO-';

					return [
						scope != null && (scope.includes(RELEASE) || scope.includes(DGO)),
						`Your scope should contain ${RELEASE} or ${DGO} in message`,
					];
				},
			},
		},
	],
};
