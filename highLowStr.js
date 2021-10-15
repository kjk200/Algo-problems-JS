//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// function highLow(str) {
//     //let trimStr = str.trim().replace(/ +/g, "");
//     let arr = str.split(" ");
//     console.log(arr);
//     return (Math.max.apply(null, arr) + " " + Math.min.apply(null, arr));

// }

function highAndLow(numbers) {
    numbers = numbers.split(' ');
    console.log(numbers);
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("1 -7 4 7 10 56"));

