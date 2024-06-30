const findTheOldest = function(people) {
    return people.reduce((greatest, current) => {
        let yearOfDeath;

        if(current.yearOfDeath === undefined) {
            yearOfDeath = new Date().getFullYear();
        } else {
            yearOfDeath = current.yearOfDeath;
        }

        let greatestYearOfDeath;
        if(greatest.yearOfDeath === undefined) {
            greatestYearOfDeath = new Date().getFullYear();
        } else {
            greatestYearOfDeath = greatest.yearOfDeath;
        }

        if(yearOfDeath - current.yearOfBirth > greatestYearOfDeath - greatest.yearOfBirth) {
            return current;
        }
        return greatest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
