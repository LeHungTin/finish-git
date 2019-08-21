function Mouse() {
	console.log('this is mouse conflict');
}

var x = 1;
console.log(x);

module.exports = Mouse;