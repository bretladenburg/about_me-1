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

var homeTownQ = prompt('Ok ' + userName + ' hope you are ready for this curveball about to come at you. Would you consider me a native to seattle area?'):
if (homeTownQ.toLowerCase() === 'yes' || homeTownQ.toLowerCase() === 'y') {
  var homeAnswerY = 'Correct! No other place I\'d rather be;'
  console.log(homeAnswerY);
  alert(homeAnswerY)
} else if (homeTownQ.toLowerCase() === 'no' || homeTownQ.toLowerCase() === 'n') {
  var homeAnswerN = 'Ok ' + userName + ' no easy way to say this but YOU ARE WRONG!'
  console.log(homeAnswerN);
  alert(homeAnswerN)
} else {
  var homeAnswerFail = 'Are you trying to upset me or do you just hate to pay attention to what you are ussuppose to'
  console.log(homeAnswerFail);
  alert(homeAnswerFail)
}

var movieQ = prompt('If somebody was interogating you for what my two favorite movies are you would of course tell them that Max is a huge fan of Romance and anything with Mathew McMonaughey in it  right>')
if (movieQ.toLowerCase() === 'yes' || movieQ.toLowerCase() === 'y') {
  var movieAnswerY = userName + ' ' + userName ' come on bud, you, me, and that tree out there all know that is the wrong answer';
  console.log(movieAnswerY);
  alert(movieAnswerY);
  var movieAnswerN = 'The dark side is strong with you young apprentice'
} else if (movieQ.toLowerCase() === 'no' || movieQ.toLowerCase() === 'n') {
  console.log(movieAnswerN);
  alert(movieAnswerN)
} else {
  var movieAnswerFail
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
