function shuffle(array) {
  let currentIndex = array.length,  randomIndex;


  while (currentIndex !== 0) {

 
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;


    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

//Input
let arr = [2, 1, 5, 3, 11, 7];
shuffle(arr);
console.log(arr);
