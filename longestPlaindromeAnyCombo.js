function longestPalindrome(str) {
    var rexp = /[^A-Za-z0-9]/g;
    var workingStr = str.toLowerCase().replace(rexp, "").split("");
    var count = {};
    workingStr.forEach(val => count[val] = (count[val] || 0) + 1);
    const values = Object.values(count);
    //console.log (count);

    var x = 0;
    var y = 0;
    values.forEach(function (value) {
        if (value % 2 == 0) {
            x = x + value;
        }
        else {
            x = x + (value - 1);
            y = 1;
        }
        //console.log(x);

    });

    return (x + y);

}
// count is {5: 4, h: 8, e: 1, l: 3, o: 2, s: 3}
//longestPalindrome("Hellloo@@@5555sssHHHHHHH");
//longestPalindrome("aabbccddeeff1122$$33");

//https://www.codewars.com/kata/reviews/5a0178ff6f793bc5b000172a/groups/5ec9412b50fbac0001b7ffd9





