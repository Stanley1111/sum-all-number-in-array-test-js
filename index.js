function sumItems(array) {
  // Sum all the numbers in the array
  if (array.length > 1){
    return sumItems(array.slice(0,1)) + sumItems(array.slice(1));
  }
  else if (Array.isArray(array[0])){
    return sumItems(array[0]);
  }
  else {
    return( array[0] ? array[0] : 0 );


  }
}

module.exports = sumItems;