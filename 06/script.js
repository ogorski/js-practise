function getDrinks(numberOfGuests) {
    let sum = 0; // our variable
    for (let i = 1; i <= numberOfGuests.length; i++) {
        sum += i;
    } // our cycle
    return sum;
}

// in this task you must calculate cycle of how many guests will have a drink from 1 portion to 3 portion;