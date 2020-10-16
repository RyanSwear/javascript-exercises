const palindromes = function(str) {

    var newSen = str.match(/[^_\W]+/g).join('');
    var sen = newSen.toUpperCase();
    let i = newSen.length - 1;
    let j = 0;
    let palindrome = true;
    while (palindrome && (j < sen.length / 2))
    {
        if (sen[i] != sen[j])
        {
            palindrome = false;
        }
        i--;
        j++;
    }
    return palindrome;

}

module.exports = palindromes
