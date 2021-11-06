import {results} from './users.json';

results.push({_Id: new ObjectId()});

var fs = require('fs');
fs.writeFile('test.json', results, 'utf8', callback);