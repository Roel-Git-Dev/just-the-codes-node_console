//Just a Javascript Console Greetings!!!
const myword = "Happy Labor Day!!"
let spell_myword = ""
let index = 0;

const intervalRef = setInterval(() => {
    console.clear()  //clear the console. so it looks like it's happening one by one
    if (index >= myword.length) {
        clearInterval(intervalRef) //Clear interval reference. To stop setInterval
        console.log(spell_myword) 
        return;
    }
    /*
    Concatenating spell_myword with myword[index]. So it looks like it is spelling
    something.
    */
    spell_myword += myword[index] 
    console.log(`${spell_myword}`)

    index++
}, 904)








