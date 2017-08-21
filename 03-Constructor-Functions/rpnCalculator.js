function RPNCalculator(){
	this.arr = [];
}

RPNCalculator.prototype.push = function(n) {
	this.arr.push(n); // 27
}

RPNCalculator.prototype.checker = function(operations){
	if(this.arr.length < 2){
		throw "rpnCalculatorInstance is empty";
	} else {
		var a = this.arr.pop(); // 7
		var b = this.arr.pop(); // 2
		this.push(operations(a,b));
	}
}
RPNCalculator.prototype.plus= function() {
	this.checker(function(a,b){
			return b + a;
	});
// 	var a = this.arr.pop(); // 7
	// var b = this.arr.pop(); // 2
	// if(isNaN(a) || isNaN(b)){
	// 	throw "rpnCalculatorInstance is empty"
	// }
	// var sum = b+a; // 2 + 7 
	// this.arr.push(sum); // 9
}
RPNCalculator.prototype.minus = function() {
	var a = this.arr.pop();
	var b = this.arr.pop();
	if(isNaN(a) || isNaN(b)){
		throw "rpnCalculatorInstance is empty"
	}
	var sum = b-a;
	this.arr.push(sum);
}
RPNCalculator.prototype.times = function() {
	var a = this.arr.pop();
	var b = this.arr.pop();
	if(isNaN(a) || isNaN(b)){
		throw "rpnCalculatorInstance is empty"
	}
	var sum = b*a;
	this.arr.push(sum);
}
RPNCalculator.prototype.divide = function() {
	var a = this.arr.pop();
	var b = this.arr.pop();
	if(isNaN(a) || isNaN(b)){
		throw "rpnCalculatorInstance is empty"
	}
	var sum = b/a;
	this.arr.push(sum);
}
RPNCalculator.prototype.value = function(){
	return this.arr[this.arr.length-1];
}