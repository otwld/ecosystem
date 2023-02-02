/* eslint-disable */
export default {
  displayName: 'api-otwld-fr',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
    '__APP__': null
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/api-otwld-fr',
  setupFilesAfterEnv: ['./test/global-teardown.ts'],
};
