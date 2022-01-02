function greeting() {
    let age = prompt("Enter your age here: ");
    alert("Hello, user!");
    if (age >= 18) {
        alert("You may enter");
    } if (age < 18) {
        alert("You`re permitted to be here");
    }
}