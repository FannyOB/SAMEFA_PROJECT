module.exports = {
  preset: 'jest-preset-react',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/test/**/*.test.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  verbose: true,
};
