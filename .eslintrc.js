module.exports = {
  ignorePatterns: [
    '**/public/**',
    '**/.cache/**',
    '**/static/**',
    '**/content/**',
  ],
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:testing-library/react',
    'plugin:react-hooks/recommended',
    'airbnb/hooks',
    'airbnb',
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'testing-library/prefer-screen-queries': 'off',
    'testing-library/render-result-naming-convention': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true,
        es6: true,
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'testing-library',
        'graphql',
      ],
      rules: {
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'no-restricted-exports': 'off',
      },

      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', '**/tsconfig.json'],
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      env: {
        browser: true,
        es6: true,
      },
      rules: {},
      plugins: [
        'testing-library',
        'react',
        'react-hooks',
        'graphql',
      ],
    },
    {
      files: [
        '**/test/**',
        '**/__mocks__/**',
        '*.spec.ts',
        '*.spec.tsx',
        '*.spec.js',
        '*.spec.jsx',
      ],
      extends: ['plugin:jest/all', 'plugin:jest-dom/recommended'],
      plugins: ['jest', 'jest-dom'],
      env: {
        browser: true,
        es6: true,
        'jest/globals': true,
      },
      rules: {
        'jest/no-hooks': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
        'import/no-relative-packages': 'off',
        'jest/no-conditional-in-test': 'off',
        'jest/prefer-snapshot-hint': 'off',
      },
    },
  ],
};
