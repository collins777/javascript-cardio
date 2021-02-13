// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

const reverseInt = int => {
  const revString = int
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(revString);
};

// console.log(reverseInt(421));

const reverseInt2 = int =>
  parseInt(
    int
      .toString()
      .split("")
      .reverse()
      .join("")
  );

// console.log(reverseInt2(123));
