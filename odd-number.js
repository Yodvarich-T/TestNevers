/**
 * 
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (numbers) => {
    // TODO : start your code here
    for (var i = 0; i < numbers.length; i++){//pick item to count
        var count = 0;
        for (var l = 0; l < numbers.length; l++) {//count that item for duplicates
            if (numbers[i] === numbers[l]) count++;
        }
        if (count % 2 !== 0) return numbers[i];//if the count is odd then return the item
    }
    return "no odd one"
}


module.exports = {
    findOddNumber
}