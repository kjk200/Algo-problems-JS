// Swap numbers without using temp variable
function swapNumb(a, b) {
    console.log('before swap: ', 'a: ', a, 'b: ', b);
    let diff = a - b;
    console.log(diff);
    b = a;
    a = a + (-diff);
    // b = b - a; //1
    // a = a + b; //3
    // b = a - b; //2
    console.log('after swap: ', 'a: ', a, 'b: ', b);
}

swapNumb(8, 5);