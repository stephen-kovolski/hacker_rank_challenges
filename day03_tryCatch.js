// // node day03_tryCatch.js

// // Complete the reverseString function; it has one parameter,

// . You must perform the following actions:

// Try to reverse string using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's
// on a new line.
// Print on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

// Input Format



// Output Format

// You must write two print statements using console.log():

// Print the contents of a caught exception's on a new line. If no exception was thrown, this line should not be printed.
// Print on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

main()


function reverseString(s) {

    try {

        console.log(s.split('').reverse().join('')); 

    } catch (err) {
        
        console.log(err)

    } 


}


function main() {
    const s = 'qwerty';
    
    reverseString(s);
}