const repeatString = function(word, repeat) {
    if(repeat < 0) {
        return "ERROR";
    }

    let returnString = "";

    for(let i = 0; i < repeat; i++) {
        returnString += word;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
