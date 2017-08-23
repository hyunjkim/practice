function Mammal(name){
	this.name = name;
	this.offspring = [];
}

Mammal.prototype.sayHello = function(){
	return `My name is ${this.name}!`;
}

Mammal.prototype.haveBaby = function(){
	var baby;
	baby  = new Mammal(`Baby ${this.name}`);
	this.offspring.push(baby);
	return baby;
}

function Cat(name,color){
	this.color = color;
	Mammal.call(this,name);
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function(color){
	var baby = new Cat(`Baby ${this.name}`,color);	
	this.offspring.push(baby);
	return baby;
}
