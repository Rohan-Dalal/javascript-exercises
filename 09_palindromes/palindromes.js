const palindromes = function (word) {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const chractersArray = characters.split("");

    let wordArray = word.toLowerCase().split("");
    for(let i = 0; i < wordArray.length; i++) {
        if(!chractersArray.includes(wordArray[i])) {
            console.log(wordArray[i]);
            wordArray.splice(i, 1);
            i--;
        }
    }

    return arraysEqual(wordArray, wordArray.slice().reverse()); 
};

function arraysEqual(arr1, arr2) {
    console.log(arr1, arr2);
    return (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]));
} 

// Do not edit below this line
module.exports = palindromes;
