function dropElements(arr, func) {
  // Drop them elements.
  //shifting array to the left till 1st element of the array till is true
  while(!func(arr[0])){
    arr.shift();
  }
  return  arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });