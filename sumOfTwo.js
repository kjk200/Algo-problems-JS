// Find if two numbers in an unsorted array can make up given sum

// const sumofTwo = (arr, sum) => {
//     let diff = {};
//     for (const elem of arr) {
//         let subtract = sum - elem;
//         if (diff[subtract]) {
//             console.log("True", elem, subtract);
//             return;
//         }
//         else {

//             diff[elem] = true;
//         }
//     }
//     console.log("No two numbers make the sum");
//     return false;

// }


function sumofTwo(arr, sum) {
    var len = arr.length;

    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] == sum) {
                console.log(arr[i], arr[j]);
                return true;
            }

        }
    }
    console.log("No");
    return false;
}


sumofTwo([2, 3, 4, 2, 2, 2], 9);



