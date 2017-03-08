'use strict';

var answer1 = prompt('Is Hockey the greatest sport?')
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
  console.log('Great minds think alike, Hockey is indeed the greatest sport');
} else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
  console.log('WHAT! Are you crazy you get to fight people ON ICE');
} else {
  console.log('Come on man it does\'t take rocket appliances to answer yes or no');
}

var answer2 = prompt('Is my favorite color yellow')
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y') {
  console.log('I hate to break the news to you but YOU ARE WRONG');
} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
  console.log('And the survey says.... YOU ARE CORRECT');
} else {
  console.log('maybe it is time to go back to school because that is not a color or an answer');
}

var answer3 = prompt('Was I born in the 80s?')
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
  console.log('You most certainly are wrong');
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
  console.log('Ding Ding Ding We have a winner');
} else {
  console.log('... really? Try again but this time please answer correctly');
}

var answer4 = prompt('If you do not finish first does that mean that you\'re last?')
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
  console.log('You are correct, now who wants to get thrown out of an AppleBee\'s');
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  console.log('That smell is not the Shake and Bake, no that smell is you crashing and burning because that was the wrong asnwer.');
} else {
  console.log('I mean this with all due respect, and I mean ALL due respect, but next time just do it right.');
}

var answer5 = prompt('It is friday night, everyone is out at the bar, do I join them?')
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
  console.log('HA, you clearly do not know anything about me');
} else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
  console.log('Right answer, friday night that means its time to people watch at Wal-Mart!');
} else {
  console.log('I tried to polietly tell you to follow the instructions but no you cannot listen or read apparently');
}
