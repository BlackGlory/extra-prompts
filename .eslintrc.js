module.exports = {
  root: true
, parser: '@typescript-eslint/parser'
, plugins: [
    '@typescript-eslint'
  , 'react'
  , 'react-hooks'
  ]
, extends: [
    'eslint:recommended'
  , 'plugin:@typescript-eslint/recommended'
  , 'plugin:react/recommended'
  , 'plugin:react/jsx-runtime'
  , 'plugin:react-hooks/recommended'
  ]
, rules: {
    'no-constant-condition': 'off'
  , 'require-yield': 'off'
  , '@typescript-eslint/no-inferrable-types': 'off'
  , '@typescript-eslint/ban-types': 'off'
  }
, settings: {
    react: {
      'version': 'detect'
    }
  }
}
