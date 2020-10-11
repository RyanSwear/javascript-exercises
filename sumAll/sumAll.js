const sumAll = function(startN, endN) {
    var answer = 'ERROR';
    var sum = 0;
    if (startN === NaN || endN === NaN)
    {
        return 'ERROR';
    }
    if (typeof startN === 'string' || typeof endN === 'string')
    {
        return 'ERROR';
    }
    if (startN > -1 && endN > -1)
    {
        if (startN > endN)
        {
            for (let index = endN; index <= startN; index++) {
                sum = sum + index;
            
            }
        }
        else{
            for (let index = startN; index <= endN; index++) {
                sum = sum + index;
            
            }
        }
        answer = sum;
    }   
    
    return answer;
}

module.exports = sumAll
