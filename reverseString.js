// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reversString('hello') === 'olleh'

function reverseString(str) {
  // split string into array
  const strArr = str.split("");
  // reverse array
  strArr.reverse();
  // turn array back into string
  return strArr.join("");
}

//console.log(reverseString("love"));

function reverseString1(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

//console.log(reverseString("hate"));

function reverseString2(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    //console.log(str[i]);
    revString = revString + str[i];
  }
  return revString;
}

//console.log(reverseString2("evil"));

function reverseString3(str) {
  let revString = "";
  for (let i = 0; i <= str.length - 1; i++) {
    console.log(str[i]);
    revString = str[i] + revString;
  }
  return revString;
}

//console.log(reverseString3("hamburger"));

function reverseString4(str) {
  let revString = "";
  for (char of str) {
    revString = char + revString;
  }
  return revString;
}

//console.log(reverseString4("hello"));

function reverseString5(str) {
  let revString = "";
  // turn string into array
  str.split("").forEach(letter => (revString = letter + revString));
  return revString;
}

//console.log(reverseString5("Bye"));

const reverseString6 = str =>
  str.split("").reduce((revString, char) => char + revString, "");

//console.log(reverseString6("hello"));
