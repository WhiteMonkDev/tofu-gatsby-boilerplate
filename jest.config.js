const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const paths = pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' });

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  transform: { '^.+\\.[jt]sx?$': '<rootDir>/src/config/jest/jest-preprocess.js' },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/file-mock.js',
    ...paths,
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: [
    'node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)',
  ],
  globals: { __PATH_PREFIX__: '' },
  testEnvironmentOptions: { url: 'http://localhost' },
  setupFiles: ['<rootDir>/src/config/jest/loadershim.js'],
};
