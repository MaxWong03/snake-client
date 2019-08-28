// stores the active tcp connection object
let connection;
const {move, message} = require('./constants');

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume(); //begin reading from stdin so process does not exit
  stdin.on('data', key => handleUserInput(key));
  return stdin;
};

const handleUserInput = (input) => {
  if (input === '\u0003') process.exit(); //handle control c
  if (input === 'w') connection.write(move.up);
  if (input === 'a') connection.write(move.left);
  if (input === 's') connection.write(move.down);
  if (input === 'd') connection.write(move.right);
  if (input === 'm') connection.write(message);
};




module.exports = setupInput;