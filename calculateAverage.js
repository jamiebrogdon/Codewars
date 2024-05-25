function findAverage(array) {
  if (array.length === 0) return 0;
  let newArr = array.reduce((acc, item) => acc + item) / array.length
  return newArr > 0 ? newArr : 0;
};
