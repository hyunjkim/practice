function factorialIterative(num){
	var total = 1;
	while(num > 0){
		total*=num;
		num--;
	}
	return total;
}
function factorial(num){
	return num === 0 ? 1: num * factorial(num-1);
}	

function fib(num){
	return num < 2 ? 1 :fib(num-1)+fib(num-2);	
}

function type(input){
	// console.log(input.constructor)
	// var check = Function.prototype.toString.call(input.constructor);
	// var hey = check.match(/function (.*)\(/)[1];
	// switch(hey){
 	// 	case "null" : return "Null";
	// 	case "Boolean" : return "Boolean";
	// 	case "Number" : return "Number";
	// 	case "String" : return "String";
	// 	case "Function" : return "Function";
	// 	case "Array" : return "Array";
	// 	case "Object" : return "Object";
	// }

	// return input.constructor.name;
	return Object.prototype.toString.call(input).slice(8,-1);
}

function stringify(input){
  var arr = [];
  var isObj = type(input);

	if(isObj === "Array"){
		for(var each of input) {
			arr.push(stringify(each));
		}
		return `[${arr.join(",")}]`;
	} else if (isObj === "Object") {
		for(var key in input){
		  var value = stringify(input[key]);
		  arr.push(`"${key}": ${value}`);
		}
		return`{${arr}}`;
	}
	return isObj === "String" ? `"${input}"`: `${input}`;
}




















