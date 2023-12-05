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
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);

// Chapter 3: Functions
