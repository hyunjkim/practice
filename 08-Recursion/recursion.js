function factorialIterative(num){
	var count = 1;
	while(num){
		count*=num;
		num--;
	}
	return count;
}

function factorial(num){
	return num === 0? 1 : num * factorial(num-1);
}

function fib(num){
	return num === 0 || num === 1 ? 1 : fib(num-1) + fib(num-2);
}

function type(val){
	return Object.prototype.toString.call(val).slice(8,-1);
}


function stringify(val){
	var arr = [];
	switch(type(val)){
		case "Array":
			for(var each of val){
			 arr.push(stringify(each));
			}
			return `[${arr.join(",")}]`;
		
		case "Object":
			for(var item in val){
			  console.log(item)
			  arr.push('"'+item+'": ' + stringify(val[item]));
			}
			return `{${arr.join(",")}}`;
		case "String": return `"${val}"`;
		default : return `${val}`;
	}
}
