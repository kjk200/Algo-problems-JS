
let arr = ["Believe in Yourself", "Never say never", "The only wasted workout is that you never did", "Keep your feet on the ground and your eyes on the stars"];

//let arr = [100, 300, 454, 345];

randomQuote = function (arr) {
    return arr[Math.floor((Math.random() * arr.length))];
}

randomQuote(arr);