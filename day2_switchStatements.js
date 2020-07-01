// // node day2_switchStatements.js

// Task

// Complete the getLetter(s) function in the editor. It has one parameter: a string,

// , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

//  If the first character in string is in the set {a,e,i,o,u}, then return A.

// If the first character in string is in the set {b,c,d,f,g}, then return B.

// If the first character in string is in the set{h,j,k,l,m}, then return C.

// If the first character in string is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.

// Hint: You can get the letter at some index in using the syntax s[i] or s.charAt(i).



function getLetter(s) {

    
    let letter;
    // Write your code here
    
    switch (true) {
        case /^[aeiou]/.test(s):
            letter = "A";
            break;
        case /^[bcdfg]/.test(s):
            letter = "B";
            break;
        case /^[hjklm]/.test(s):
            letter = "C";
            break;
        case /^[npqrstvwxyz]/.test(s):
            letter = "D";
            break;
    }
    
    return letter;
}


function main() {

    let s = 'nhbcdefg';

    console.log(getLetter(s));
}

main()