function findShort(s){
  let wordArr = s.split(' ');
  let shortestWord = Infinity;
  
  for (let i = 0; i < wordArr.length; i++){
    let wordLength = wordArr[i].length;
    if (wordLength < shortestWord){
      shortestWord = wordLength;
     }
   }
    return shortestWord;
}
