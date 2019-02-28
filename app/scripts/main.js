const returnPhoneWords = function(input){
  if (!input) {
    return;
  }
  const numMap = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z']
  };
  let possibleCombinations;
  const inputSplit = input.toString().split('');
  const validDigits = inputSplit.filter(numbers => numbers !== "0" && numbers !== "1");

  const createCombinations = function(i, nextNumber, currentCombos) {
    let newCombos = [];
    currentCombos.forEach(function(combo){
        numMap[nextNumber].forEach(function(number){
            newCombos.push(combo + number);
        })
      }
		);
    if (i === validDigits.length - 1){
       possibleCombinations = newCombos;
       return;
    }
    createCombinations(i + 1, validDigits[i + 1], newCombos);
  }

  createCombinations(0, validDigits[0], ['']);
  return possibleCombinations;
};
