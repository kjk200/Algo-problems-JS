// Find prime factors of a number..startby deviding by 2 and increase
//Complexity O(n)

function primeFactors(n) {
    let factors = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        }
        else {
            divisor++;
        }
    }
    console.log(factors);
    return factors;
}

primeFactors(2);