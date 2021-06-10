// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function (name) {
    var firstLetter = name.trim().charAt(0).toUpperCase();
    var restOfName = name.trim().slice(1).toLowerCase();
    return ("Hello" + " " + firstLetter + restOfName + "!");
};

greet("  LAADI 1982 @@ ");

//replace(/ +/g, "")
//trim removes white space