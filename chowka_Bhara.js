function replaceAtIndex(targetIndex, string, char) {
  let returnString = "";

  for (let index = 0; index < string.length; index++) {
    let currentChar = targetIndex === index ? char : string[index];

    returnString += currentChar;
  }

  return returnString;
}

function findIndex(string, target) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] === target) {
      return index;
    }
  }
}
