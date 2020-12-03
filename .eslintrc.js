module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      legacyDecorators: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'babel', 'react-hooks', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': 0,
    'react/state-in-constructor': 0,
    'react/no-array-index-key': 1,
    'react/sort-comp': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-case-declarations': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 0,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'no-else-return': [
      2,
      {
        allowElseIf: true
      }
    ],
    'no-plusplus': 0,
    'lines-between-class-members': ['error', 'never'],
    'consistent-return': 0,
    'prefer-destructuring': 1,
    camelcase: [
      'error',
      {
        allow: ['^UNSAFE_'],
        properties: 'never',
        ignoreDestructuring: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        bracketSpacing: true,
        trailingComma: 'none',
        semi: false,
        printWidth: 100
      }
    ]
  }
}
