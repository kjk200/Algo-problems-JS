// Find total numer of zeroes from 1 to 100

const findZeroes = (n) => {
    let zeroCount = 0;
    while (n > 1) {
        zeroCount += Math.floor(n / 10);
        n = n / 10;
    }
    console.log(zeroCount);
}

findZeroes(100);