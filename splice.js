const numbers = [1, 2, 3];

for(let i = 0; i < numbers.length; i++) { //counter going 0,1,2 i = 0, i = 1, i = 2
  numbers.splice(i, 1);
}

console.log(numbers);


//1st iteration is [1, 2, 3] so index 0,1,2. So remove index 0 which is 1 on 1st iteration.
//2nd iteration is [2,3] so index 0,1. So remove index 1 as second iteration(i starts at 0 and next is 1). This is 3 on the 2nd iteration.
//3rd iteration is [2] so it doesn't go on the 3rd iteration as i = 2 which is greater than the length.

//ANSWER IS [2].
