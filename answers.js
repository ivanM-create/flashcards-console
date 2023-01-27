const fs = require('fs');
const { EOL } = require('os');

class Answer {
  constructor(num) {
    this.num = num;
  }

  answer(theme) {
    let arr = fs
      .readFileSync(`${__dirname}/topics/${theme}.txt`, 'utf-8')
      .split(EOL);
    let arrA = [];
    for (let i = 0; i < arr.length; i += 3) {
      arrA.push(arr[i + 1]);
    }
    return arrA;
  }
}

module.exports = Answer;
