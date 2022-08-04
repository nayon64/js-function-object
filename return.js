function givenSingara(money) {
	var singaraPrice = 10;
	var quentity = money / singaraPrice;
	var quentity1 = parseInt(quentity);
	return quentity1;
}

var singaras = givenSingara(116);
console.log('Eating Singaras: ', singaras);
