// CHALLENGE 2: VALIDATE A PALINDROME
// Palindrome: word that is spelled the same way in reverse
// Return true if a palindrome and false if not
// ex. isPalindrome('racecar') === true
// ex. isPalindrom('hello') === false

const isPalindrome = str => {
  // reverse string and compare it to the original
  const revString = str
    .split("")
    .reverse()
    .join("");

  // returns true or false
  return revString === str;
};

// console.log(isPalindrome("hello"));
// console.log(isPalindrome("racecar"));
