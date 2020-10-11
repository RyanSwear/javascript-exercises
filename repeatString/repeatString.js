const repeatString = function(phrase, repetition) {
    if (repetition < 0)
    {
        return 'ERROR';
    }
    let answer ="";
    for (let index = 0; index < repetition; index++) {
        answer = answer + phrase;
        
    }
    return answer;
}

module.exports = repeatString
