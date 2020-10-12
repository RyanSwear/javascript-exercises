const ftoc = function(number) {
  let answer = 0;
  answer = (number - 32) * (5 / 9);
  answer = Math.round(answer * 10) / 10;
  return answer;
}

const ctof = function(number) {
  let answer = 0;
  answer = (number * (9 / 5)) + 32;
  answer = Math.round(answer * 10) / 10;
  return answer;
}

module.exports = {
  ftoc,
  ctof
}
