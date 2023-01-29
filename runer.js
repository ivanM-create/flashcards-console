const readlineSync = require('readline-sync');
const Question = require('./question');
const Answer = require('./answers');

const q = new Question();
const a = new Answer();

const thems = ['Nighthawk', 'Otter', 'Raccoon'];
const index = readlineSync.keyInSelect(thems, 'Choose the topic');

let count = 0;
for (let i = 0; i < q.question(thems[index]).length; i += 1) {
  const r = readlineSync.keyInSelect(
    a.answer(thems[index]),
    // eslint-disable-next-line comma-dangle
    q.question(thems[index])[i]
  );
  if (i === r) {
    count += 1;
  }
}
console.log(`Спасибо за игру 👍🐱!!! правильных ответов: ${count}`);
