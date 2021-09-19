// generate a random number of 4 digits
// number cannot start with 0
// each digits must be unique
export const generateRandomNumber = () => {
  // valid numbers are only 1-9, this indicates that value cannot start with 0
  let validNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // generates random index from validNums only
  let randomIdx = Math.floor(Math.random() * validNums.length);
  // genNumber is the new random numbers which are spliced together
  let genNumber = validNums.splice(randomIdx, 1)[0];

  // makes 0 is now valid digit but not at the start of the guess
  validNums.push(0);
  for (let i = 0; i < 3; i++) {
    randomIdx = Math.floor(Math.random() * validNums.length);
    // same as above, but pushes 0 to next digit
    genNumber = genNumber * 10 + validNums.splice(randomIdx, 1)[0];
  }
  return genNumber;
};

// finds the bulls an cows - string format
// bulls = correct number and position
// cows = correct number
export const determineBullsAndCows = (secretNum, attempt) => {
  // initial value of bulls and cows are 0
  // console logs the secret number for reference (only logs everytime a value has been placed)
  let bulls = 0;
  let cows = 0;

  secretNum = secretNum.toString();
  attempt = attempt.toString();
  console.log(secretNum);

  let possibleCows = [];

  // for loop - loops i for bulls - checks if secret number i is equal to attempt i, if so bull +1
  for (let i = 0; i < secretNum.length; i++) {
    if (secretNum[i] === attempt[i]) {
      bulls += 1;
      // else, push to possibleCows (code below)
    } else {
      possibleCows.push(attempt[i]);
    }
  }
  // for loo for cows - checks if secret number i is equal to attempt i, if so cows +1
  for (let j = 0; j < possibleCows.length; j++) {
    if (secretNum.includes(possibleCows[j])) {
      cows += 1;
    }
  }
  // final return - bulls and cows string value
  return bulls + " Bulls " + cows + " Cows";
};

// checks if attempt was already made
export const isAlreadyAttempted = (logs, attempt) => {
  for (let i = 0; i < logs.length; i++) {
    if (logs[i][0] === attempt) {
      return true;
    }
  }
  return false;
};

// checks if attempt is valid: 4 digits. all unique. not starting with 0.
// set size reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
//
export function isAttemptProper(attempt) {
  attempt = attempt.toString();
  let set = new Set();

  // can't start with 0.
  if (attempt[0] === "0") {
    return false;
  }
  // checks for unique 4 digits.
  for (let i = 0; i < attempt.length; i++) {
    if (set.has(attempt[i]) || isNaN(attempt[i])) {
      return false;
    }
    set.add(attempt[i]);
  }
  // size (returns the number of unique elements), if size is !== 4, return false
  if (set.size !== 4) {
    return false;
  }
  // otherwise return attemptProper as true
  return true;
}

// isGameOver - return "WIN", "LOSE", "IN PROGRESS"
export const isGameOver = (logs) => {
  for (let i = 0; i < 12; i++) {
    // find win condition - if logs equal to "4 Bulls 0 Cows, return win"
    if (logs[i][1] === "4 Bulls 0 Cows") {
      return "WIN";
    }
    // game is in progress
    if (logs[i].length === 0) {
      return "IN PROGRESS";
    }
  }
  // no win was found within 12 tries.
  return "LOSE";
};
