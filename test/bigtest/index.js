require('babel-polyfill');

// require all test files matching 'lib/**/tests/*-test'
const requireTest = require.context('../../lib/', true, /-test/);
requireTest.keys().forEach(requireTest);
