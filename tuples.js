// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. 
//For empty output return an empty list.
// Example:
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


var orderedCount = function (text) {

    var workingText = text.split("");
    var count = [];
    workingText.forEach(element => count[element] = (count[element] || 0) + 1);
    var tupleList = [];
    var mySet1 = new Set();
    for (i = 0; i < workingText.length; i++) {
        if (!mySet1.has(workingText[i])) {
            mySet1.add(workingText[i]);
            tupleList.push([workingText[i], count[workingText[i]]]);
        };

    };
    return tupleList;
}

orderedCount("abracadabra112233ee");



//------------------------------------------------------------------------------------------------------------------------
// Javascript does not have tuples like Python....but the output can be tried to achieve with some workaround
// var parsed = JSON.parse('[{"name":"john", "place":"usa", "phone":"12345"},{"name":"jim", "place":"canada", "phone":"54321"}]');

// var people = [];
// for (var i=0; i < parsed.length; i++) {
//    var person = [parsed[i].name, parsed[i].place, parsed[i].phone];
//    people.push(person);
// }  https://stackoverflow.com/questions/20392782/a-list-of-tuples-in-javascript


const orderedCount = s =>
Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));

  orderedCount("abracadabra112233ee");