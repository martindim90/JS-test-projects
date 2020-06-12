//looping a triangle exercise
let hashTriangle = ""; 

for (let i = 0; i < 7; i++) {
    console.log(hashTriangle + "#");
}

 // fizzbuzz exercise
function fizzBuzz () {    
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log ("Fizz ");
        } else if (i % 5 == 0) {
            console.log ("Buzz ");
        } else if (i % 15 == 0) {
            console.log("FizzBuzz");
        }
    }
}

fizzBuzz();

// chessboard exercise
let size = 10;  
      let board = "";

      for (y = 0; y < size; y++ ) {
          for (x = 0; x < size; x++) {
              if ((x + y) % 2 == 0) {
                  board += "#";
              } else {
                  board += " ";
              }
          }
          board += "\n";
      }

     console.log(board);

     //The Sum of a Range console.log(sum(range(1,10)))

     function range (start, end) {
         let rangeArr = [];

         return start === end ? start : false;


     }