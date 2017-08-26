function doubler(num){
	return num * 2;
}

function map(arr, func){
	var newArr = [];
	for(var each in arr) newArr.push(func(arr[each]));
	return newArr;
}

function filter(arr,func){
	let newArr = [];
	for(var each in arr){
    	if(func(arr[each])) newArr.push(arr[each])
    }
	return newArr;
}

function contains(arr,val){
	for(var each in arr){
		if(arr[each]===val) return true;
	}
	return false;
}

function countWords(str){
	return str.split(" ").length;
}


function reduce(arr,start,func){
	for(var each in arr){
		start = func(arr[each],start)
	}
	return start;
}

function countWordsInReduce(arr,num){
	return num+countWords(arr);
} 

function sum(arr){
	var mArr = 0;
	for(var each in arr){
		mArr += reduce(arr[each],arr[each],sum);
	}
	return mArr;
}

function every(arr,func){
  for(var each in arr){
    if (reduce(arr[each],arr[each],func)%2) return false;
  }
	return true;
}

function any(arr,func){
  for(var each in arr){
    if (reduce(arr[each],arr[each],func)%2===0) return true;
  }
	return false;
}