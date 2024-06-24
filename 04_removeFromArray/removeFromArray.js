const removeFromArray = function(array, ...toRemove) {
    let newArray = array.filter((x) => !(toRemove.includes(x)));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
