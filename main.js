'use strict';

// Chapter 2: Program Structure
// Chess Board
function chaseBoard(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                row += ' ';
            } else {
                row += '#';
            }
        }
        console.log(row);
    }
}

chaseBoard(8);

// Looping a Triangle
function triangle(size) {
    let row = '';
    for (let i = 0; i < size; i++) {
        row += '#';
        console.log(row);
    }
}

triangle(8);


// FizzBuzz
function fizzBuzz(size) {
    for (let i = 1; i <= size; i++) {
        let output = '';
        if (i % 3 === 0) {
            output += 'Fizz';
        }
        if (i % 5 === 0) {
            output += 'Buzz';
        }
        console.log(output || i);
    }
}

fizzBuzz(100);

// Chapter 3: Functions
