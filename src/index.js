/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  let count = 0;
  preferences.forEach((item, i, arr) => {
      const twoItem = arr[item - 1];
      const threeItem = arr[twoItem - 1]
      const oneItem = arr[threeItem - 1];
      if (oneItem === item && twoItem !== oneItem && twoItem !== threeItem) {
          count += 1;
          arr[item - 1] = null;
          arr[twoItem - 1] = null;
          arr[threeItem - 1] = null;
  }
});
return count;
};
