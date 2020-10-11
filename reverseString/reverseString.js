const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let reverseString = reverseArray.join("");
    return reverseString;
}

module.exports = reverseString
