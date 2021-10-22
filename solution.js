function shuffle(array) {
  let currentIndex = array.length,  randomIndex;


  while (currentIndex !== 0) {   //Current index starts from 0th position of array

 
    randomIndex = Math.floor(Math.random() * currentIndex); //randomize the index of the array to get a random index within the input array
    currentIndex--;


    [array[currentIndex], array[randomIndex]] = [ //current is 0, random  = random,0
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

//Input
let arr = [2, 1, 5, 3, 11, 7];
shuffle(arr);
console.log(arr);
