// Code your solutions in this file
function writeCards(array, event) {
    const newArray = [];
    for (let counter = 0; counter < array.length; counter++) {
        newArray[counter] = `Thank you, ${array[counter]}, for the wonderful ${event} gift!`;
    }
    return newArray;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}