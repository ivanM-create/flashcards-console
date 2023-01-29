const fs = require('fs');
const { EOL } = require('os');

class Answer {
  answer(theme) {
    const arr = fs
      .readFileSync(`${__dirname}/topics/${theme}.txt`, 'utf-8')
      .split(EOL);
    const arrA = [];
    for (let i = 0; i < arr.length; i += 3) {
      arrA.push(arr[i + 1]);
    }
    return arrA;
  }
}

module.exports = Answer;
