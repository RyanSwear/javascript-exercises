const leapYears = function(year) {
    let answer = 'ERROR';
    let leapYear = false;
    if (year > 0)
    {
        if(year % 4 == 0)
        {
            leapYear = true;
        }
        if (year % 100 == 0)
        {
            leapYear = false;
        }
        if (year % 400 == 0)
        {
            leapYear = true;
        }
    }
    answer = leapYear;
    return answer;
}

module.exports = leapYears
