// jest.config.js
module.exports = {
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
