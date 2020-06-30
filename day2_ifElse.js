// node day2_ifElse.js

//did not want to use an if/else statement since it would be messy and much longer than writting a swtich statement.  Its so much cleaner and consice.

let score = Math.floor(Math.random() * 31);


function getGrade() {

    console.log(score)


    switch(true){
        case score >= 25:
            console.log('your grade is an A');
            break;
        case score >= 20 && score < 25:
            console.log('your grade is a B');
            break;
        case score >= 15 && score < 20:
            console.log('your grade is a C');
            break;
        case score >= 10 && score < 15:
            console.log('your grade is a D');
            break;
        case score >= 5 && score < 10:
            console.log('your grade is an E');
            break;
        case score >= 0 && score < 5:
            console.log('Your grade is an F');
    }

    
}



getGrade(score)