
const isPalindrome = (str) => {
    wstr = str.toLowerCase();
    revStr = wstr.split("").reverse().join("");
    if (revStr === wstr) {
        console.log("yes,its a palindrome");
    }
    else {
        console.log("No,not a palindrome");
    }
}

isPalindrome("Hannah");