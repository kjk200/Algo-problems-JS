// Find if two strings are anagrams of each other ...Anagrams are strings containing same characters in same quantities


function cleanStr(str) {
    return str.replace(/[^\w]/g, "")
        .toLowerCase().split("").sort().join("");
}



function isAnagram(strA, strB) {
    if (cleanStr(strA) === cleanStr(strB)) {
        console.log("Yes, these are anagrams !!")
    }
    else {
        console.log("No, not anagrams");
    }
}

isAnagram("Happy", "yapph");