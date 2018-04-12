module.exports = {
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  testRegex: 'test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js', 'jsx'],
  setupFiles: ['./testSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer', './emotion-serializer'],
};
