const configJest = {
  preset: ['jest-preset-react'],
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};

export default configJest;
