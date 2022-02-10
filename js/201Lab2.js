'use strict;'

console.log('hey world');

let counter = 0;
let userName = prompt('What is your name?');
alert(`Welcome ${userName} to my page! Since you're here, we're gonna play a yes or no game!`);

let answerOne = prompt('Do I have a cat?').toLowerCase();

// .toLowerCase will make it accept all lower case inputs 
// .toUpperCase must have yes no answers be all capitals

if (answerOne === 'yes' || answerOne === 'y') {
  alert('Yes I do have a cat');
  counter = counter + 1;
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('Sorry you are incorrect')
}
console.log(`${userName} answered ${answerOne} for question One`)
// acp files individually for to make commenting on a commit easier and cleaner

let answerTwo = prompt('Do I play the bass?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('Unfortunatly I do not, I play the guitar!');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Correct! I play the Guitar');
  counter = counter + 1;
}
console.log(`${userName} answered ${answerTwo} for question Two`);

let answerThree = prompt('Is Ryans favorite genre of music Metal?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  alert('Thats correct! Ryan loves his metal!');
  counter = counter + 1;
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('What???? Of course Ryan loves metal!');
}
console.log(`${userName} answered ${answerThree} for question Three`);

let answerFour = prompt('Is Ryans favorite band Death?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  alert('Oh yeah he does, that is a great band after all');
  counter = counter + 1;
} else if (answerFour === 'no' || answerFour === 'n') {
  alert('How could he not? That band is awesome!');
}
console.log(`${userName} answered ${answerFour} for question Four`);

let answerFive = prompt('Is this last question relavent?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  alert('No... It most definitly is not...');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('Correct! Even Ryan does not know why he put in this question!');
  counter = counter + 1;
}
console.log(`${userName} answered ${answerFive} for question Five`);

let myNumber = '17';

let i = 0;
userNumber = prompt('What number am I thinking of? Give ya a hint, it is between One and 25');
while (i <= 2) {
  i++;
  //userNumber = prompt('What number am I thinking of? Give ya a hint, it is between One and 25');
  if (userNumber > myNumber) {
    alert('Sorry bro, too high of a number');
    userNumber = prompt('What number am I thinking of? Give ya a hint, it is between One and 25');
  } else if (userNumber < myNumber) {
    alert('Sorry bro, too low of a number');
    userNumber = prompt('What number am I thinking of? Give ya a hint, it is between One and 25');
  } else {
    alert('You are correct!');
    counter = counter + 1;
    //console.log(userName, userNumber)
    break;
  }
}
alert('The correct answer was 17, Hope ya got it right!')

let songs = ['master of puppets', 'fade to black', 'flesh and the power it holds', 'one', 'holy wars', 'voice of the soul', 'symbolic', 'spirit crusher', 'creeping death', 'five magics']
let songGuesses = 6;
let favorite = ['flesh and the power it holds', 'master of puppets'];
let foundFavorite = false;

while (songGuesses > 1 && !foundFavorite) {
  let userInput = prompt('Out of these songs, which do you think are my favorite? Master of Puppets, Fade to Black, Flesh and the Power it holds, One, Holy wars, Voice of the Soul, Symbolic, Spirit Crusher, Creeping Death, Five Magics.');
  songGuesses--;
  for (let i = 0; i < favorite.length; i++) {


    if (userInput === favorite[i]) {
      alert('You guessed right!')
      foundFavorite = true;
      counter = counter + 1;
    }
  }
}

alert('Master of puppets as well as flesh and the power it holds were the correct answers, hope you got them right!')
alert(`Thank you ${userName} for playing this simple guessing game! You have gotten ${counter} answers correct!`);