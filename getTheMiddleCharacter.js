function getMiddle(s){
  let middle = "";

  if (s.length % 2 === 1) 
    middle = [s[(s.length / 2) | 0]];
  else 
    middle = [s[(s.length / 2 - 1) | 0], s[(s.length / 2) | 0]];

  return middle.join("");
};
