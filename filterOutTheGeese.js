function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  // return an array containing all of the strings in the input array except those that matchstrings in geese
  return birds.filter( bird => !geese.includes(bird));
};
