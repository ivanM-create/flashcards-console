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

  answer1(theme) {
    return this.answer(theme)[0];
  }

  answer2(theme) {
    return this.answer(theme)[1];
  }

  answer4(theme) {
    return this.answer(theme)[2];
  }

  answer5(theme) {
    return this.answer(theme)[3];
  }
}
let a = new Answer();
console.log(a.answer('otter'));
