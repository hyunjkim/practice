function createCalculator(){

	var total = 0;

	return {
		value : function(){
			return total;
		},
		add : function(num){
			total += num;
		},
		subtract : function (num){
			total -= num;
		},
		clear : function(){
			total = 0;
		}
	}
}
