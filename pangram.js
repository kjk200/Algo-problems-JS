// A pangram is a sentence that contains every single letter of the alphabet at least once. 
//For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the 
//letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    var rexp = /[^A-Za-z]/g;
    var workingStr = string.toLowerCase().replace(rexp, "").split("");
    var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    for (var i = 0; i < alphabet.length; i++) {
        if (workingStr.indexOf(alphabet[i]) == -1) {
            return false;
        }
    }
    return true;
}

//pangram("A lady is COMBING her hair 2033 @@@");
isPangram("The quick brown fox jumps over the lazy dog");
