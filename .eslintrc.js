/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint-config-tc',
    'eslint-config-typescript-tc',
    'eslint-config-react-tc',
  ],
  rules: {
    'jest/no-deprecated-functions': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-lines-per-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/require-default-props': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        printWidth: 80,
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  root: true,
};
