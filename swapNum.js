// Swap numbers without using temp vatiable
function swapNumb(a, b) {
    console.log('before swap: ', 'a: ', a, 'b: ', b);
    b = b - a; //1
    a = a + b; //3
    b = a - b; //2
    console.log('after swap: ', 'a: ', a, 'b: ', b);
}

swapNumb(2, 3);