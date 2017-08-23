function doubler(num){
	return num * 2 ;
}

function map(arr,func){
	var index = 0
	for(var each in arr){
		arr[index] = func(arr[each]);
		index++;
	}
	return arr;
}

function filter(arr,func){
	var mArr = [];
	for(var each in arr){
		if(func(arr[each])) mArr.push(arr[each]);
	}
	return mArr;
}

function contains(arr,num){
	for(var each in arr){
		if(num === arr[each]) return true;
	}
	return false;
}

function countWords(str){
	return str.split(" ").length;
}

function reduce(arr,num,func){
	var total = num;
	for(var each in arr){
		total = func(total,arr[each]);
	}
	return total;
}

function countWordsInReduce(num,words){
	return num+words.split(" ").length;
}


function sum(arr){
	var myArr = 0;
	for(var each in arr){
		myArr += reduce(arr[each],arr[each],sum);
	}
	return myArr;
}

function every(arr,func){
  var gather = 0;
	for(var each in arr){
		gather += reduce(arr,arr[each],func);
	}
	return gather === arr.length? true : false;
}

function any(arr,func){
	var total = 0;
	var sum = 0
	if(arr.length === 0) return false;
	for (var each in arr){
		total += reduce(arr,arr[each],func);
	}
	return total >= 1? true : false;
}