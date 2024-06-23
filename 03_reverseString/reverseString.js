const reverseString = function(reverse) {
    let returnString = "";

    for(let i = reverse.length - 1; i >= 0 ; i--) {
        returnString += reverse[i]
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
