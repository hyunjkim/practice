function setPropsOnObj(obj){
	obj.x = 7;
	obj['y']= 8;
	obj["onePlus"] = function(n){return n+1;}
}

function setPropsOnArr(arr){
	arr.hello = function(){return "Hello!"};
	arr["full"] = "stack";
	arr[0]= 5;
	arr.twoTimes = function(num){return num*2;}
}

function setPropsOnFunc(fun){
	fun.year = "20??";
	fun.divideByTwo = function(n) {return n/2;}
	fun.prototype.helloWorld = function(){return "Hello World";};
}