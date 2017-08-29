const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('Rohan'));

var filteredArray = _.uniq(["Rohan",1,"Rohan",1,2,3,4,6,7,8]);
console.log(filteredArray);
