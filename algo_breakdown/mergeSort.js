const mergeSort = list => {
    if (list.length > 1) {
      const middle = Math.floor(list.length / 2);
      let left = list.slice(0, middle);
      let right = list.slice(middle);
      left = mergeSort(left); 
      right = mergeSort(right);
      list = []; 
      
      while(left.length && right.length) {
        if (left[0] <= right[0]) {
          list.push(left[0]);
          left.splice(0,1);
        } else {
          list.push(right[0]);
          right.splice(0, 1);
        }
      }
      list.push(...left, ...right);
    }
    return list;
  };
  
  console.log(mergeSort([38,27,43,3,9,82,10,17]));
  
  /*
  [38,27,43,3,9,82,10,17]
            / \
  [38,27,43,3] [9,82,10,17]
      /  \           /  \
  [38,27] [43,3]  [9,82] [10,17]
    / \     / \     / \     / \
  [38][27] [43][3] [9][82] [10][17]
    \  /    \  /    \  /     \  /
   [27,38] [3,43]  [9,82]   [10,17]
        \  /            \  /
    [3,27,38,43]     [9,10,17,82]
            \           /
    [3, 9, 10, 17, 27, 38, 43, 82]
  */