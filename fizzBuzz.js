
// for multiples of 3 print fizz, for multiples of 5 print Buzz, for both FiZZBuzz, for others print number
const fizzBuzz = (n) => {
    for (i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }


    }

}

fizzBuzz(15);