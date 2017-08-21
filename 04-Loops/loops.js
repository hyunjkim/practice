function repeat(str, num){
	return num===0 ? "":str + repeat(str,num-1);
}

// function sum(arr){
// 	return arr.length === 0? 0: arr[0] + sum(arr.slice(1));
// }

function sum(arr){
	var total = 0;
	arr.forEach(e=>{
		total+=e;
	});
	return total;
}

function join(arr,char){
	var str = "";
	arr.forEach(e => {
		str+=e;
		if(arr.indexOf(e) !== arr.length-1 && char !== undefined){str += char;}
	});
	return arr.length === 0? "" : str;
}

function gridGenerator(num){
	var isHashed = true;
	var grid = "";
	for(var i = 0; i < num; i++){
		if(i % 2) {isHashed=false;}
		for (var j = 0; j < num; j++){
			if(isHashed){
				grid+="#";
			} else {
				grid+=" ";
			}
			isHashed = !isHashed;
		}
		grid+='\n';
	}
	return grid;
}	


function paramify(obj){
	var str = [];
	for(var eachItem in obj){
		if(obj.hasOwnProperty(eachItem)){
			str.push(`${eachItem}=${obj[eachItem]}`);
		}
	}
	return str.sort().join("&");
}

function paramifyObjectKeys(obj){
	var str = [];

	var keys = Object.keys(obj);
	keys.forEach( e => {
		str.push(`${e}=${obj[e]}`);
	});
	return str.sort().join("&");
}

function renameFiles(arr){
  var mArr = []; 
  var num = 1; 
  arr.forEach(e => { 
    if(mArr.includes(e)){ 
      if(mArr.includes(`${e}(${num})`)){ 
        while(mArr.includes(`${e}(${num})`)){  
          num++;
        } 
        mArr.push(`${e}(${num})`);
      } else {
        mArr.push(`${e}(${num})`);
      }
    } else mArr.push(e)
    num = 1;
  });
	return mArr;
}
