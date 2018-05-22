module.exports = {
  transform: {
    '\\.tsx?$': 'ts-jest',
  },
  testRegex: 'test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js', 'jsx'],
  snapshotSerializers: ['./emotion-serializer'],
};
