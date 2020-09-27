/**
 * Author : Akila Dunukara
 * Copyrights: Akila Dunukara
 * version:
 * Description: functions to print random words and write data to files
 * Date-Created: 28-09-2020
 * Date-Updated: 28-09-2020
 */

const { getRandomWordSync, getRandomWord } = require('word-maker');
let fs = require("fs");

/**
 * write array of inputs to a file
 * @param {string} fileName 
 * @param {array} data 
 */
const writeDataArrayToAFile = (fileName, data) => {
    
    try {
        const output = data.join("\n");

        // write the output at Results/filename.txt
        fs.writeFile("Results/" + fileName + ".txt", output, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        }); 
    } catch (error) {
        console.error(error)
    }
}

/**
 * write data string to a file
 * @param {string} fileName 
 * @param {string} data 
 */
const writeDataToAFile = (fileName, data) => {

    try {
        fs.appendFileSync("Results/" + fileName + ".txt", data + "\n");
    } catch (error) {
        console.error(error)
    }
}

/**
 * generate random words and print into an external file
 * @param {boolean} withErrors with/without error handling
 * @param {*} taskName name of the task
 */
const randomWords = (withErrors, taskName) => {

    let dataArray = [];
    for(let i=1; i<101; i++){

        let text = "";
        try {
            let randomWord = getRandomWordSync({ withErrors: withErrors });
            text = i + ": "+ randomWord;
        } catch (error) {
            if(withErrors){
                text = "It shouldn't break anything!";
            }
        }

        dataArray.push(text);
        
    }
    writeDataArrayToAFile(taskName, dataArray);
}

/**
 * generate random words with FIzz, Buzz and FizzBuzz and print into an external file
 * @param {boolean} withErrors with/without error handling
 * @param {*} taskName name of the task
 */
const randomWordsWithFizzBuzz = (withErrors, taskName) => {

    let dataArray = [];
    for(let i=1; i<101; i++){

        let text = "";

        try {
            if( i%3 == 0 && i%5 == 0 ){
                text = i + ": FizzBuzz";        
            }else if( i%3 == 0){
                text = i + ": Fizz";
            }else if( i%5 == 0){
                text = i + ": Buzz";

            }else{
                let randomWord = getRandomWordSync({ withErrors: withErrors });
                
                text = getRandomWordSync({ withErrors: withErrors })
                
                text = i + ": "+ randomWord.trim();
            } 
        } catch (error) {
            if(withErrors){
                text = "It shouldn't break anything!";
            }
        }   
        dataArray.push(text);
                
    }
    writeDataArrayToAFile(taskName, dataArray);
}

/**
 * generate random words asynchronously and print into an external file
 * @param {boolean} withErrors with/without error handling
 * @param {*} taskName name of the task
 */
const randomWordsAsync = async (withErrors, taskName) => {

    let dataArray = [];
    for(let i=1; i<101; i++){

        let text = "";
        try {
            let randomWord = await getRandomWord({ withErrors: withErrors });
            text = i + ": "+ randomWord;
        } catch (error) {
            if(withErrors){
                text = "It shouldn't break anything!";
            }
        }

        dataArray.push(text);

    }

    writeDataArrayToAFile(taskName, dataArray);
}

/**
 * generate random words with FIzz, Buzz and FizzBuzz asynchronously and print into an external file
 * @param {boolean} withErrors with/without error handling
 * @param {*} taskName name of the task
 */
const randomWordsWithFizzBuzzAsync = async (withErrors, taskName) => {

    let dataArray = [];
    for(let i=1; i<101; i++){

        let text = "";

        if( i%3 == 0 && i%5 == 0 ){
            text = i + ": FizzBuzz";        
        }else if( i%3 == 0){
            text = i + ": Fizz";
        }else if( i%5 == 0){
            text = i + ": Buzz";

        }else{

            try {
            
                let randomWord = await getRandomWord({ withErrors: withErrors });
                text = i + ": "+ randomWord.trim();
            } catch (error) {
                if(withErrors){
                    text = "It shouldn't break anything!";
                }
            }
        
        }    
        dataArray.push(text);       
    }
    writeDataArrayToAFile(taskName, dataArray);
}

/**
 * Bonus Task - Ignoring the acsending order the solution resolves the promise and print the resolved value to an external file.
 * The execution time is around 1000ms as the solution doesn't wait for asynchronous event to resolve the promise in acsending order. 
 * @param {string} taskName filename of the output text file
 */
const bonusTask = (taskName) => {

    for (let i = 1; i < 101; i++) {
        let text = "";
        getRandomWord({ withErrors: false, slow: true }).then(str => {

            text =  i + ": "+ str;
            writeDataToAFile(taskName, text);
        })
    }

    
}

module.exports = {
    randomWords,
    randomWordsWithFizzBuzz,
    randomWordsAsync,
    randomWordsWithFizzBuzzAsync,
    bonusTask
}