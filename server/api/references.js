const people = require('./pessoas');
const users = require('./usuarios');
const bills = require('./boletos');

const references = {};
references.people = people;
references.users = users;
references.bills = bills;

module.exports = references;