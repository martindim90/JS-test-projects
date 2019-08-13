let hashTriangle = ""; //looping a triangle exercise

for (let i = 0; i < 7; i++) {
    console.log(hashTriangle + "#");
}


function fizzBuzz () {     // fizzbuzz exercise
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


let size = 10;  // chessboard exercise
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
