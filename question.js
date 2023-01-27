const fs = require("fs");
const { EOL } = require("os");

class Question {
  constructor(num) {
    this.num = num;
  }
  question(theme) {
    let arr = fs
      .readFileSync(`${__dirname}/topics/${theme}.txt`, `utf-8`)
      .split(EOL);
    let arrQ = [];
    for (let i = 0; i < arr.length; i += 3) {
      arrQ.push(arr[i]);
    }
    return arrQ;
  }
  question1(theme) {
    return this.question1(theme)[0];
  }
  question2(theme) {
    return this.question2(theme)[1];
  }
  question3(theme) {
    return this.question3(theme)[2];
  }
}
let q = new Question();
console.log(q.question1("otter"));

// module.exports = Nighthawk;
