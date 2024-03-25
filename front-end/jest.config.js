const configJest = {
  preset: ['jest-preset-react'],
  testEnvironment: 'jsdom', // environnement de simulation de navigateur pour test JS
  roots: ['<rootDir>/src'], // va chercher des fichiers test dans le fichier src
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // transforme les fichiers js et jsx pour utiliser des fonctionnalités/syntaxes js et jsx plus récentes
  },
};

export default configJest;
