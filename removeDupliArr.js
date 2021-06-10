
// Remove duplicates from an array

const removeDupli = (arr) => {
    let outArr = [];
    let dupli = {};
    let element;

    for (i = 0; i < arr.length; i++) {
        element = arr[i];
        if (!dupli[element]) {
            outArr.push(element);
            dupli[element] = true;

        }
    }
    console.log(outArr);
    console.log(dupli);
    return outArr;


}

removeDupli([1, 2, 14, 3, 3, 3, 5, 6, 7, 8, 9, 9, 10]);