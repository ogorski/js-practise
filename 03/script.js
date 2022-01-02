let num = 20;

function showMessage(text) {
    console.log(text);
    console.log(num);
}

showMessage("Hello, user!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

function calculate(c, d) {
    return (c * d);
}

console.log(calc(2, 3));
console.log(calc(3, 4));

console.log(calculate(4, 5));
console.log(calculate(5, 6));

function result() {
    let num = 50;
    return num;
}

const anotherNum = result();
console.log(anotherNum);