(function () {
  'use strict';

  describe('returnPhoneWords', function() {
    it ('should return the max number of combinations based on the numpad', function() {
      const possibleLetters = {
        '2': 3,
        '3': 3,
        '4': 3,
        '5': 3,
        '6': 3,
        '7': 4,
        '8': 3,
        '9': 4
      };
      const input = Math.floor(Math.random() * 100000) + 1;
      const inputSplit = input.toString().split('');
      const validDigits = inputSplit.filter(numbers => numbers !== '0' && numbers !== '1');
      const options = validDigits.map(function(number){
        return possibleLetters[number];
      });
      const maxCombos = options.reduce( (a,b) => a * b );

      const possibleCombos = returnPhoneWords(input);
      expect(possibleCombos.length).to.equal(maxCombos);
    });
  });
})();
