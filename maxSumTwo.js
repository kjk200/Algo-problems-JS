// Find the max sum of two numbers from an array 

//naive sol: O(n)2

// function maxSum(arr) {
//     let maxSum = 0;

//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] > maxSum) {
//                 maxSum = arr[i] + arr[j];
//             }
//         }
//     }
//     console.log(maxSum);
//     return maxSum;
// }



// Better approach : Sort  the array first, max sum will be of last two numbers
// You will have to add compare function in the sort() as the sort function by default arranges alphabetically so numbers are not sorted correctly
// O(n logn)
// const maxSum = (arr) => {
//     let sortedArr = arr.sort((a, b) => (a - b));
//     console.log(sortedArr);
//     let max = sortedArr[arr.length - 1] + sortedArr[arr.length - 2];
//     console.log(max);
// }
// 

// Greedy algorithm ...here we walk through the array once 
// Time complexity O(n)

const maxSum = (arr) => {
    let bigNum;
    let secBig;

    if (arr[0] > arr[1]) {
        bigNum = arr[0];
        secBig = arr[1];
    }
    else {
        bigNum = arr[1];
        secBig = arr[0];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > bigNum) {
            secBig = bigNum;
            bigNum = arr[i];
        }
        else if (arr[i] > secBig) {
            secBig = arr[i];
        }
        else {
            continue;
        }

    }
    console.log(bigNum + secBig);
    return (bigNum + secBig);

}

maxSum([2, 13, 5, 10]);
