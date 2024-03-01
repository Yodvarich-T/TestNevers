// Write your test here

if (str.length && str.length < 2 ){
    return str //the recursive stops on the last letter
 }
 const arr = []; //array to keep the combine letter
 for (let i = 0; i < str.length; i++){
    let char = str[i] //take a letter as a 'base' <------------------------------*
    if (str.indexOf(char) != i)
       continue // if the letter has been used as a 'base' then skip to prevent duplicate
       let remainder = str.slice(0, i) + str.slice(i + 1, str.length) // take remaining letters( both before and after the 'base')
       for (let permutation of manipulate(remainder)){ // the remaining letters are going through the function again *-------------------->
          arr.push(char + permutation) //combine the 'base' with each arr or str that return from the function
       }
 }
 return arr
