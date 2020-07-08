// node day4_deep-shallow_copy.js

// Today’s challenge is to create a function tthat returns a deep copy of an object. This is a really interesting concept and you’ll have to look up the difference between shallow copy and deep copy. Try to use what you understand about objects to solve this. a good fcc algorithm to reference for this one is the steamroller/array flatten algorithm.

const pizza = {

    veggie: {
        topping: 'peppers',
        cheese: 'feta',
        sauce: 'tomato'
    },

    meat: {
        topping: 'pepperoni',
        cheese:  'mozzerella',
        sauce: 'tomato'
    },

    bbq: {
        topping: 'chicken',
        cheese: 'mozzerella',
        sauce: 'bbq'
    }


}


const objTwo = {

    a: 'test',
    b: 3,
    c: { d: 'testing', e: 7 },
    e: { nesed: { deep: 'this is deep', asdf: () => {console.log('hello')} }},


}



function parseInfo() {

    let copyObj = JSON.parse(JSON.stringify(objTwo))

    console.log(copyObj)

}


parseInfo()


