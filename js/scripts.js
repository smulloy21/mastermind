var pegs = ['red', 'green', 'blue', 'purple', 'yellow'];

var generateCode = function(length) {
  var newCode = [];
  for (var i = 0; i < length; i++) {
   newCode.push(pegs[Math.floor(Math.random() * 5)]);
  }
  return newCode;
};

var checkGuess = function(code, guess) {
  var newCode = code.slice();
  var newGuess = guess.slice();
  var response = [];
  for (var i = 0; i < newCode.length; i++) {
    if (newCode[i] === newGuess[i]) {
      response.push('black');
      newGuess.splice(i, 1);
      newCode.splice(i, 1);
      i = -1;
    }
  }
  for (var i = 0; i < newCode.length; i++) {
    if (newCode.indexOf(newGuess[i]) !== -1) {
      response.push('white');
      newCode.splice(newCode.indexOf(newGuess[i]), 1);
      newGuess.splice(i, 1);
      i = -1;
    }
  }
  return response;
};

$(document).ready(function(){
  var newCode = generateCode(4);
  $('form#guess').submit(function(event){
    event.preventDefault();
    var peg1 = $('#peg1').val();
    var peg2 = $('#peg2').val();
    var peg3 = $('#peg3').val();
    var peg4 = $('#peg4').val();
    var guess = [peg1, peg2, peg3, peg4];
    var result = checkGuess(newCode, guess);
    if (guess[0] === newCode[0] && guess[1] === newCode[1] && guess[2] === newCode[2] && guess[3] === newCode[3]) {
      $('#guess-history').append('<p>Congrats, you win!</p>');
    }
    $('#guess-history').append('<p>Your guess: ' + guess.join(', ') + ' Response: ' + result.join(', ') + '</p>');


    $('input#peg1').text("");
    $('input#peg2').text("");
    $('input#peg3').text("");
    $('input#peg4').text("");
    $('#guess-history').show();
  });
});
