const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);

const isUnchecked = true,
      isOpened = false;

console.log(isUnchecked || isOpened);
console.log(isUnchecked && isOpened);
    
const isTrue = true;
      isFalse = false;

console.log(isTrue || !isFalse);

const num = 2,
      secondNum = 2,
      lastNum = 2;

console.log(num * secondNum + lastNum !== 8);

console.log(num * secondNum + lastNum != '6')