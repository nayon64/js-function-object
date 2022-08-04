var shipingCart = {
	books: 12,
	mouses: 5,
	monitor: 2,
	pen: 6,
}
console.log(shipingCart)
// get property varlue 
var mousesCount = shipingCart.mouses;
// console.log(mousesCount);
var mousesCount1 = shipingCart['mouses'];
// console.log(mousesCount1);
var propertyName = "mouses";
var mousesCount2 = shipingCart[propertyName];
// console.log(mousesCount2);

// get object property name only 
var propertyName1 = Object.keys(shipingCart);
console.log(propertyName1)

// get object property value only 
var propertyValue = Object.values(shipingCart);
console.log(propertyValue);


