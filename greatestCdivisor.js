
// Find the greatest common divisor of two numbers

function grtDivisor(a, b) {
    let divisor = 2;
    let greatD = 1;

    if (a < 1 || b < 1) {
        return 1;
    }

    while (a >= divisor && b >= divisor) {
        if (a % divisor == 0 && b % divisor == 0) {
            greatD = divisor;
        }
        divisor++;
    }
    console.log(greatD);
    return greatD;

}

grtDivisor(3, 15);