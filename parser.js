var parser = require('xml-js');

const xml = require('fs').readFileSync('junit.xml', 'utf-8');

const options = {compact: true, ignoreComment: true, spaces: 4};

const result = parser.xml2json(xml, options)

console.log(result);



// "scripts": {
//     "test": "NODE_OPTIONS=--openssl-legacy-provider jest --no-color 2>output.txt",
//     "start": "NODE_OPTIONS=--openssl-legacy-provider webpack-dev-server --mode development --watch --open --hot",
//     "build": "NODE_OPTIONS=--openssl-legacy-provider webpack --mode production"
//   },