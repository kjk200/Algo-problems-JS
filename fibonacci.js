// Fibonacci series is next number being sum of two previous ones. For example if starting with 0,1,1,2,3,5,8,13 etc.
//Find nth fibonacci member
// Complexity O(n)

// function fibonacci(n) {
//     let fibo = [0, 1];

//     if (n <= 1) return n;

//     for (let i = 2; i <= n; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     console.log(fibo[n]);

// }



// Recursive Complexity O(2 rtp n)

function fibonacci(n) {
    if (n <= 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));