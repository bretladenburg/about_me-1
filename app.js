'use strict';

var userName = prompt('what should I call you?');
console.log('Nice to meet you ' + userName + ' I am Max. I may be the oddest person you will meet.')
var jobQ = prompt('So ' + userName + ' are you in management at your job?')
if (jobQ.toLowerCase() === 'yes' || jobQ.toLowerCase() === 'y') {
  var jobAnswerY = 'Hmmm sounds interesting ' + userName + ' I too have worked as a manager at every job I\'ve had, currently at dominos pizza I went back to just deliverying so i could go to school'
  console.log(jobAnswerY);
  alert(jobAnswerY);
} else if (jobQ.toLowerCase() === 'no' || jobQ.toLowerCase() === 'n') {
  var jobAnswerN = 'Well somebody has to do the grunt work. I\'ve got people to do that for me';
  console.log(jobAnswerN);
  alert(jobAnswerN);
} else {
  var jobAnswerFail = 'So...uh...yeah if you could go ahead and come in on saturday that\'d be great.'
  console.log(jobAnswerFail);
  alert(jobAnswerFail);
}

var sportsQ = prompt('NOow ' + userName + ' are you a hockey fan?')
if (sportsQ.toLowerCase() === 'yes' || sportsQ.toLowerCase() === 'y') {
  var sportAnswerY = 'You and me can be friends then ' + userName + ' hockey is my favorite sport by far.';
  console.log(sportsAnswerY);
  alert(sportsAnswerY)
} else if (sportsQ.toLowerCase() === 'no' || sportsQ.toLowerCase() === 'n') {
  var sportsAnswerN = 'You are not a fan of hockey?' + userName + ' lets drop the gloves and fight then.';
  console.log(sportsAnswerN);
  alert(sportsAnswerN)
} else {
  var sportsAnswerFail = 'please take a second look and notice that you did not get close to answering that correcrtly';
  console.log(sportsAnswerFail);
  alert(sportsAnswerFail)
}

var answer3 = prompt('Was I born in the 80s?')
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
  console.log('You most certainly are wrong');
  alert('You most certainly are wrong')
} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n') {
  console.log('Ding Ding Ding We have a winner');
  alert('Ding Ding Ding We have a winner')
} else {
  console.log('... really? Try again but this time please answer correctly');
  alert('... really? Try again but this time please answer correctly')
}

var answer4 = prompt('If you do not finish first does that mean that you\'re last?')
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
  console.log('You are correct, now who wants to get thrown out of an AppleBee\'s');
  alert('You are correct, now who wants to get thrown out of an AppleBee\'s');
} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n') {
  console.log('That smell is not the Shake and Bake, no that smell is you crashing and burning because that was the wrong asnwer.');
  alert('That smell is not the Shake and Bake, no that smell is you crashing and burning because that was the wrong asnwer.')
} else {
  console.log('I mean this with all due respect, and I mean ALL due respect, but next time just do it right.');
  alert('I mean this with all due respect, and I mean ALL due respect, but next time just do it right.');
}

var answer5 = prompt('It is friday night, everyone is out at the bar, do I join them?')
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y') {
  console.log('HA, you clearly do not know anything about me');
  alert('HA, you clearly do not know anything about me')
} else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
  console.log('Right answer, friday night that means its time to people watch at Wal-Mart!');
  alert('Right answer, friday night that means its time to people watch at Wal-Mart!');
} else {
  console.log('I tried to polietly tell you to follow the instructions but no you cannot listen or read apparently');
  alert('I tried to polietly tell you to follow the instructions but no you cannot listen or read apparently');
}
