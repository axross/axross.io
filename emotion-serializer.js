const emotion = require('emotion');
const { createSerializer } = require('jest-emotion');

module.exports = createSerializer(emotion);
