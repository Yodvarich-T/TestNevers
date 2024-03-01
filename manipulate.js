/**
 * 
 * @param {string} str string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (str) => {
    // TODO : start your code here
    if (str.length && str.length < 2 ){
        return str
     }
     const arr = [];
     for (let i = 0; i < str.length; i++){
        let char = str[i]
        if (str.indexOf(char) != i)
           continue
           let remainder = str.slice(0, i) + str.slice(i + 1, str.length)
           for (let permutation of manipulate(remainder)){
              arr.push(char + permutation)
           }
     }
     return arr
}

module.exports = {
    manipulate
}