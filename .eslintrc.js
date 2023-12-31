module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb-base', 'airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: ['jest.*.js', 'coverage/*', 'html-report/*'],
  plugins: [
    '@typescript-eslint',
    'jest',
    'no-only-tests'
  ],
  rules: {
    'linebreak-style': 0,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'no-only-tests/no-only-tests': ['error', { fix: true }],
    'object-curly-spacing': ['error', 'always'],
    'import/prefer-default-export': 'off',
    'no-useless-catch': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/return-await': 'off'
  }
};
