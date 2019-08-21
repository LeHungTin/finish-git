function Mouse() {
	console.log('this is mouse conflict');
}

var x = 1;
console.log(x);

var y = 2;
console.log(y);

module.exports = Mouse;