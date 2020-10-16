function add (number1, number2) {
	return (number1 + number2);
}

function subtract (number1, number2) {
	return (number1 - number2);
}

function sum (numbers) {
	let answer = 0;
	for (let i = 0; i < numbers.length; i++)
	{
		answer = answer + numbers[i];
	}
	return answer;
}

function multiply (numbers) {
	let answer = 0;
	for (let i = 0; i < numbers.length; i++)
	{
		if (i == 0){
			answer = numbers[i];
		}else{answer = answer * numbers[i];}
		
	}
	return answer;
}

function power(number1, number2) {
	return(Math.pow(number1, number2));
}

function factorial(number1) {
	let answer = 1;
	for (let i = 1; i <= number1; i++)
	{
		answer = answer * i;
	}
	return answer;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}