// ##### Introduction #####
//
// The below assignment will require NO functions
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//


// ##### Challenges #####

console.log('##### Challenge 1 #####');
// 1.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.
// Hint: Use `if` and a modulus operation.
for (i=1; i<20; i++){
    if (i%3===0){
        console.log(i   )
    }
}


console.log('##### Challenge 2 #####');
// 2.
//
// Console out the numbers from 1-20. BACKWARDS.
for (i=20; i>0; i--){
    console.log(i)
}


console.log('##### Challenge 3 #####');
// 3.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
let string3 = 'Boy howdy am I good at this!';
for (const letter of string3){
    console.log(letter)
}



console.log('##### Challenge 4 #####');
// 4.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
let string4 = 'And getting better every day.';
for (i=2; i<string4.length; i+=3){
    console.log(string4[i])
}


console.log('##### Challenge 5 #####');
// 5. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
let string5 = 'Am I the best?';
for (const ltt of string5){
    console.log(ltt.toUpperCase())
}


console.log('##### Challenge 6 #####');
// 6.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
let string6 = 'Whoa, I am the best!';
//original, does not capitalize AM
// for (const l of string6){
//     console.log(l)
// }
let arrOfStr = string6.split(" ")
console.log("String 6 SPLIT into Array of Strings:", arrOfStr)
let thirdArr = []
for (const word of arrOfStr){
    if (word === arrOfStr[2] ){
        thirdArr.push(word.toUpperCase())
    } else {
        thirdArr.push(word)
    }
}
console.log("After we identified 3rd word:", thirdArr)
let fourthArr = thirdArr.join(" ")
console.log("Joined back into one Array:", fourthArr)
for (const l of fourthArr){
        console.log(l)
    }


console.log('##### Challenge 7 #####');
// 7.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
let string7 = 'I am become death, destroyer of worlds.';
for (i = string7.length-1; i > 0; i--){
    console.log(string7[i])
}


console.log('##### Challenge 8 #####');
// 8.
//
const names = 'Alex|Mesuara|Brian|Chanel|Matt|Jeremy B.|Jose|Andy|Dustin|Joshua|Steve H.|Cesar|Nastya|Jeremy L.|Michael|John|Lee|Ruth|Steve M.|Tim|Ronny|Stevie R|Neo|Rick|Kyle|Minahil|Adam|Sonny|James|Daisy|Willie';

// Console out the individual letters of each person in class, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!
// let students = []
// for(const char of names){
//     students.push(names.split("|"))
// }
// for (const student of students){
//     console.log('Here today is:', student)
// }
console.log("Here today is:")
for (const char of names){
    if (char === "|"){
        console.log("Here today is:")
    } else {
        console.log(char)
    }
}


