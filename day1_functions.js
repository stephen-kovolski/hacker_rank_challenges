//node day1_functions.js


//Implement a function named factorial that has one parameter: an integer, . It must return the value of (i.e., factorial).


function findFactorial(num) {

    let answer = [];


    for (let i = num-1; i > 0; i--) {
        answer = num *= i;
    }

    console.log(answer)

}

findFactorial(4)