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


const sumOfTwo = function (nums, target) {

    return nums.map((num, i) => {
        const complement = target - num;
        const j = nums.findIndex((n, index) => n === complement && index != i);
        return j !== -1 ? [i, j] : null;
    }).find(Boolean);

}


console.log(sumOfTwo(nums, 6));

