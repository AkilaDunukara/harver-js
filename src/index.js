const { getRandomWordSync, getRandomWord } = require('word-maker');
let fs = require("fs");

// YOUR CODE HERE

const {
    randomWords,
    randomWordsWithFizzBuzz,
    randomWordsAsync,
    randomWordsWithFizzBuzzAsync,
    bonusTask
}  = require("./functions");

/**
 * Execute tasks
 */
const executeTasks = () => {

    //task 1
    randomWords(false,"1");
    //task 2
    randomWordsWithFizzBuzz(false,"2");
    // task 3.1 - asyncronous
    randomWordsAsync(false,"3.1");
    // task 3.2 - asyncronous
    randomWordsWithFizzBuzzAsync(false,"3.2");
    //task 4.1 - with error == true
    randomWords(true,"4.1");
    //task 4.2 - with error == true
    randomWordsWithFizzBuzz(true,"4.2");
    //task 4.3 - with error == true
    randomWordsAsync(true,"4.3");
    //task 4.4 - with error == true
    randomWordsWithFizzBuzzAsync(true,"4.4");
    //bonus task
    bonusTask("bonus");
}

executeTasks();