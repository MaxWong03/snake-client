const connect = require('./client');
const setupInput = require('./input');
console.log('Connecting....');

/**
 * Setup User Interface
 * Specfically, so that we can handle user input via stdin
 */


setupInput(connect());