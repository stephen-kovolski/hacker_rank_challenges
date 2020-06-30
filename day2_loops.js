
function vowelsAndConsonants(word) {
    let vowels = 'aeiou';
    let consonants = '';
    
    for(let i = 0; i < word.length; i++) {
       if (vowels.includes(word[i])) {
           console.log(word[i]);
       }
       else {
           consonants += word[i] + '\n';
       }
    }
    
    console.log(consonants);
}

vowelsAndConsonants('javascript')