describe('generateCode', function(){
  it('randomly generates a new code for the player to crack', function(){
    var newCode = generateCode(4);
    expect(newCode.length).to.equal(4);
  });
  it('doesnt have anything besides peg colors', function(){
    var newCode = generateCode(4);
    expect(pegs.indexOf(newCode[Math.floor(Math.random() * 4)])).to.not.equal(-1);
  });
  it('is (almost always) unique', function(){
    var newCode = generateCode(4);
    var newCode2 = generateCode(4);
    expect(newCode).to.not.eql(newCode2);
  });
});

describe('checkGuess', function(){
  it('compares a guess against a code', function() {
    var newCode = ['red', 'green', 'red', 'blue'];
    var guess = ['red', 'blue', 'yellow', 'purple'];
    expect(checkGuess(newCode, guess)).to.eql(['black', 'white']);
  });
  it('only puts white once for repeated colors (if not double in code)', function() {
    var newCode = ['red', 'green', 'yellow', 'blue'];
    var guess = ['red', 'blue', 'blue', 'purple'];
    expect(checkGuess(newCode, guess)).to.eql(['black', 'white']);
  });
  it('checks for black before giving any whites', function() {
    var newCode = ['red', 'green', 'blue', 'yellow'];
    var guess = ['red', 'green', 'red', 'purple'];
    expect(checkGuess(newCode, guess)).to.eql(['black', 'black']);
  });
});
