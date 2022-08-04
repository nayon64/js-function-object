function giveMeSomucha(money) {
	console.log("Give me somucha in " + money +' taka')
}
var resulet = giveMeSomucha(200);
console.log(typeof (resulet));


// give multiple peramiter 
function asignValue(num1, num2) {
	console.log("Asign value are : ", num1, num2)
}
asignValue(12, 13)

function sum(a, b, c, d) {
	console.log(a, b, c, d)
	var sum = a + b + c + d;
	console.log(sum)
}
sum(5, 3, 3, 2)
