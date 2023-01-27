let readlineSync = require('readline-sync'),
  animals = ['Nighthawk', 'Otter', 'Raccoon'],
  index = readlineSync.keyInSelect(animals, 'Choose the topic');
console.log('Ok, ' + animals[index] + ' goes to your room.');
