// To check if prime number : prime numbers are only divisible by 1 and itself, If a number is divisible by 2 its not a prime number. check from 2 to square root of that number
// complexity O(sqrt(n))....if n was used then O(n)
const isPrimeNum = (n) => {
    s = Math.sqrt(n);
    for (let i = 2; i <= s; i++) {
        if (n % i === 0) {
            console.log("No,its not a prime number");
            return false;
        }

    }
    console.log("yes,its a prime number");
    return n > 1;
}

isPrimeNum(2);