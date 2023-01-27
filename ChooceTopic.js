const fs = require('fs');

const theme = fs.readFileSync(`${__dirname}topics/otter.txt`, 'utf-8');
// class Topic {
//   getTopic(file) {
//     // return file.split('\n');
//   }
// }
// const topic = new Topic();
console.log(theme);

// module.exports = Topic;
