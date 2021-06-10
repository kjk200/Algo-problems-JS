
// Reverse a string

// function revStr(str) {
//     console.log(str.split('').reverse().join(''));
//     return str.split('').reverse().join('');
// }

// function revStr(str) {
//     let reversed = [];
//     for (i = str.length - 1; i >= 0; i--) {
//         reversed = reversed + str[i];
//     }
//     console.log(reversed);
//     return reversed;
// }

const revStr = (str) => {
    if (!str) {
        return str;
    }
    else {
        return revStr(str.substr(1)) + str[0];
    }

};



revStr("Hellomello");