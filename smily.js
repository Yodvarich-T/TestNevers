/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmilyFace = (texts) => {
    // TODO : start your code here
    let count = 0;
      let validSmileys = [":)",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"]
      for (let text of texts) { 
        if (validSmileys.includes(text)) { 
          count++;
        }
      }
      return count;
}

module.exports = {
    countSmilyFace
}