function isPalindrome(word) {
  //racecar 7 / 2 == 3.5
  //aaaaaa 6 / 2 == 3
  //iterate from the beginning to the middle
  for (let i = 0; i < word.length / 2; i++) {
    //check each letter tot he corresponding letter from the end
    const j = word.length - 1 - i;
    // if any letters don't match return false
    if (word[i] !== word[j]) return false;
  }
  // return true
  return true;
}

/* 
  Add your pseudocode here

  Iterate from the beginning to the middle
    check each eltter to  the corresponding letter from the end
      if any letters dont match, return falase

  return true
*/

/*
  Add written explanation of your solution here
  
  Make a function that returns true if a word is a palindrome. It will compare the first and last letter to check if
  they are the same. And then move to compare the 2nd letter and 2nd last letter together and so on, until it reaches
  the last letter/s.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
