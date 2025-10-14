// Find if two numbers in an unsorted array can make up given sum

// sum - elem → O(1)

// diff[complement] → O(1) lookup in object

// diff[elem] = true → O(1) assignment

// 🟢 All operations inside the loop are constant time(O(1))



const nums = [1, 5, 6, 7, 9, 10, 17, 36, 42, 67];
const sumOfTwo = (arr, sum) => {
    let diff = {};
    for (let i = 0; i < arr.length; i++) {
        let complement = sum - arr[i];
        if (diff[complement]) {
            return [diff[complement], i];
        }
        diff[arr[i]] = i;
    }
}


// const sumOfTwo = function (nums, target) {

//     return nums.map((num, i) => {
//         const complement = target - num;
//         const j = nums.findIndex((n, index) => n === complement && index != i);
//         return j !== -1 ? [i, j] : null;
//     }).find(Boolean);

// }

console.log(sumOfTwo(nums, 13));

