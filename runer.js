const readlineSync = require('readline-sync');
const Question = require('./question');
const Answer = require('./answers');

let q = new Question();
let a = new Answer();

animals = ['Nighthawk', 'Otter', 'Raccoon'];
index = readlineSync.keyInSelect(animals, 'Choose the topic');

let count = 0;
for (let i = 0; i < q.question(animals[index]).length; i += 1) {
  r = readlineSync.keyInSelect(
    a.answer(animals[index]),
    q.question(animals[index])[i]
  );
  if (i === r) {
    count += 1;
  }
}
console.log(`Спасибо за игру 👍 !!! правиьных ответов: ${count}`);
