'use strict';

var userName = prompt('what should I call you?');
console.log('Nice to meet you ' + userName + ' I am Max. I may be the oddest person you will meet.')

function one() {
  var jobQ = prompt('So ' + userName + ' are you in management at your job?')
  if (jobQ.toLowerCase() === 'yes' || jobQ.toLowerCase() === 'y') {
    var jobAnswerY = 'Hmmm sounds interesting ' + userName + ' I too have worked as a manager at every job I\'ve had, currently at dominos  pizza I went back to just deliverying so i could go to school'
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
}
one();

function two() {
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
}
two();

function three() {
  var homeTownQ = prompt('Ok ' + userName + ' hope you are ready for this curveball about to come at you. Would you consider me a native to   seattle area?');
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
}
three();

function four() {
  var movieQ = prompt('If somebody was interogating you for what my two favorite movies are you would of course tell them that Max is a   huge fan of Romance and anything with Mathew McMonaughey in it  right')
  if (movieQ.toLowerCase() === 'yes' || movieQ.toLowerCase() === 'y') {
    var movieAnswerY = userName + ' ' + userName + ' come on bud, you, me, and that tree out there all know that is the wrong answer';
    console.log(movieAnswerY);
    alert(movieAnswerY);
    var movieAnswerN = 'The dark side is strong with you young apprentice'
  } else if (movieQ.toLowerCase() === 'no' || movieQ.toLowerCase() === 'n') {
    console.log(movieAnswerN);
    alert(movieAnswerN)
  } else {
    var movieAnswerFail = 'There once was a man from peru, who dreamed he was eating his shoe, when he woke with a fright in the middle of  the night he KNEW HOW TO READ NOW WHY CAN\'T YOU';
    console.log(movieAnswerFail);
    alert(movieAnswerFail);
  }
}
four();

function five() {
  var wallyWorldQ = prompt('This is probably the easiest of all the questions ' + userName + ' please don\'t. Would you say that WAL-MART   is my favorite store?')
  if (wallyWorldQ.toLowerCase() === 'yes' || wallyWorldQ.toLowerCase() === 'y') {
    var walMartY = 'WAY TO GO' + userName + ' I am so proud of you. Here\'s a gold star for all your hard work';
    console.log(walMartY);
    alert(walMartY)
  } else if (wallyWorldQ.toLowerCase() === 'no' || wallyWorldQ.toLowerCase() === 'n') {
    var walMartN = 'I am literally speachless ' + userName + ' it doesn\'t take rocket science to know how much I love Wal-Mart'
    console.log(walMartN);
    alert(walMartN);
  } else {
    var walMartFail = 'I have been very patient with you and polietly tell you to follow directions ' + userName + ' but no apparently you  cannot listen or read.'
    console.log(walMartFail);
    alert(walMartFail);
  }
}
five();

function six() {
  var numberGame = prompt(userName + ' COME ON DOWN!! *que price is right music* Time to play GUESS THAT NUMBER! Pick a number between 0  and 10. you have five attempts');

  var userAnswer;
  if (userAnswer === 3) {
    alert('you guessed it')
  } else {
    alert('try again')
  }
  }
six();

function seven(){
  for (i = 0; i <= 5; i++) {
    alert('guess ' + i + ' out of 5');
  }
  continue;
  }
seven();
