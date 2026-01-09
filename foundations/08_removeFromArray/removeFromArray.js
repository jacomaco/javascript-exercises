const removeFromArray = function(array, ...numsToRemoveFromArray) {

    return array.filter(num => !numsToRemoveFromArray.includes(num));
    /*
    let newArray = []; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] != number) {
            newArray.push(array[i]);
        }
    }
    return newArray;
    */
};

console.log(removeFromArray([1, 2, 3, 4], 3));


// Do not edit below this line
module.exports = removeFromArray;
