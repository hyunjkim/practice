function createCalculator(){

	var total = 0;
	var value = function(){
		return total;
	}
	function add(num){
		return value += num;
	}
	function substract(num){
		return value -=num;
	}
}
