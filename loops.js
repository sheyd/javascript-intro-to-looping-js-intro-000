function forLoop(array) {
  for (let i = 0; i < 25; i++) {
<<<<<<< HEAD
    if (i === 1) {
      array.push(`I am ${i} strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
=======
    if (i = 1) {
      array.push("I am `${i}` strange loop.");
    } else {
      array.push("I am `${i}` strange loops.");
>>>>>>> f692fe2e506b9539f331ef2c408157f465248d69
    }
  }
  return array;
}
<<<<<<< HEAD

function whileLoop (number) {
  while (number > 0) {
    console.log(number--);
  }
  return "done";
}

let i = 0;

function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop (integer) {
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() <= integer);
}
=======
>>>>>>> f692fe2e506b9539f331ef2c408157f465248d69
