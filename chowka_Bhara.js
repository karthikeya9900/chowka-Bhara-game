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


function createPlayGround() {

  let ground = '\n\t                  P l a y e r            \n';
  ground += '\t   ┏━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┓  \n';
  ground += '\t   ┃ 0   0 ┃       ┃       ┃       ┃       ┃  \n';
  ground += '\t   ┃       ┃   ⇦   ┃       ┃       ┃       ┃  \n';
  ground += '\t   ┃ 0   0 ┃       ┃       ┃       ┃       ┃  \n';
  ground += '\t   ┣━━━━━━━╋━━━━━━━╋━━━━━━━╋━━━⇩━━━╋━━━━━━━┫  \n';
  ground += '\t   ┃ 1   2 ┃       ┃       ┃       ┃       ┃  \n';
  ground += '\t   ┃       →       ┃       ┃       ┃   ⬆   ┃  \n';
  ground += '\t p ┃ 4   3 ┃       ┃       ┃       ┃       ┃ p\n';
  ground += '\t l ┣━━━━━━━╋━━━━━━━╋━━━⇩━━━╋━━━━━━━╋━━━━━━━┫ l\n';
  ground += '\t a ┃ ➀   ➁ ┃       ┃       ┃       ┃ ➊   ➋ ┃ a\n';
  ground += '\t y ┃       ┃       →       ⬅       ┃       ┃ y\n';
  ground += '\t e ┃ ➂   ➃ ┃       ┃       ┃       ┃ ➌   ➍ ┃ e\n';
  ground += '\t r ┣━━━━━━━╋━━━━━━━╋━━━⇡━━━╋━━━━━━━╋━━━━━━━┫ r\n';
  ground += '\t   ┃       ┃       ┃       ┃       ┃       ┃  \n';
  ground += '\t   ┃   ↓   ┃       ┃       ┃       ⬅       ┃  \n';
  ground += '\t   ┃       ┃       ┃       ┃       ┃       ┃  \n';
  ground += '\t   ┣━━━━━━━╋━━━⇡━━━╋━━━━━━━╋━━━━━━━╋━━━━━━━┫  \n';
  ground += '\t   ┃       ┃       ┃ ❶   ❷ ┃       ┃       ┃  \n';
  ground += '\t   ┃       ┃       ┃       ┃   ⇢   ┃       ┃  \n';
  ground += '\t   ┃       ┃       ┃ ❸   ❹ ┃       ┃       ┃  \n';
  ground += '\t   ┗━━━━━━━┻━━━━━━━┻━━━━━━━┻━━━━━━━┻━━━━━━━┛  \n';
  ground += '\t                 P l a y e r                  \n';

  console.log(ground.indexOf('➃'));
  return ground;
}


const ground = createPlayGround();

let stringForPlus192 = "098102194198290294386390482486578582674678770774";
