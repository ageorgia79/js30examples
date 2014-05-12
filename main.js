///**homework begins here//
//newObject//**this is an example of a new objecvar newObject = {
	
var cruiser = {
	make: "ford",
	doors: "four",
	wheels: "round",
	engine: "small"
};

var speedster = {
		make: "Porche",
		doors: "four",
		wheels: "round",
		engine: "small"
	};

var newArray = [
	{
		make: "ford",
		doors: "four",
		wheels: "round",
		engine: "small",
	},
	{
		make: "Porche",
		doors: "four",
		wheels: "round",
		engine: "small"
	}];

//this is an example of "reduce"
["ford","four","round","small"].reduce(function(x, y){
	return x + y;
});

//this is an example of a map//
newArray.map(function(findit){
	return findit.wheels;
});

//this is an example of a "forEach"
newArray.forEach(function(cars){
	console.log(cars.make);
});

////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

//this is a new object//
var Next = {
	offices: 30,
	businesses: 28,
	staff: 140
};

var TheIronYard = {
	classrooms: 2,
	instructors: 4,
	students: 17
};

var newArray = [
{
	offices: 30,
	businesses: 28,
	staff: 140
},
{
	classrooms: 2,
	instructors: 4,
	students: 17
}];

//this is an example of "reduce"
[2,4,17].reduce(function(x, y){
	return x + y;
})

//this is an example of "map"
newArray.map(function(people){
	return people.instructors;
});

//this is an example of "forEach"
newArray.forEach(function(thistime){
	console.log(thistime.offices);
});
////////////////////////////////////////////////////////////////
var table = {
	height: 6,
	width: 12,
	length: 20
};

var chair = {
	height: 2,
	width: 8,
	length: 14
};

var newArray = [
{
	height: 6,
	width: 12,
	length: 20
},
{
	height: 2,
	width: 8,
	length: 14
}];

[2,8,24].reduce(function(x, y){
	return x + y;
})

newArray.map(function(dimension){
	return dimension.height;
})

newArray.forEach(function(build){
	console.log(build.width);
})
///////////////////////////////////////////////////////////////////
var swimmingPool = {
	size: "huge",
	deep: "true",
	clean: "false"
};

var lifeguard = {
	sex: "male",
	smart: "true",
	swims: "false"
};

var newArray = [
{
	size: "huge",
	deep: "true",
	clean: "false"
},
{
	sex: "male",
	smart: "true",
	swims: "false"
}];

["huge","true","false"].reduce(function(x, y){
	return x + y;
});

newArray.map(function(fun){
	return fun.clean;
});

newArray.forEach(function(safety){
	console.log(safety.swims);
});
////////////////////////////////////////////////////////////////
var airplane = {
	size: "huge",
	wingspan: 90,
	length: 400
};

var airport = {
	size: "small",
	runways: 4,
	quiet: "false"
};

var newArray = [
{
	size: "huge",
	wingspan: 90,
	length: 400
},
{
	size: "small",
	runways: 4,
	quiet: "false"
}];

["huge",90,400].reduce(function(x, y){
	return x + y;
});

newArray.map(function(traffic){
	return traffic.quiet;
});

newArray.forEach(function(isitbig){
	console.log(isitbig.size);
});
///////////////////////////////////////////////////////////////////

var Texas = {
	population: 5000000000,
	sqmiles: 35000,
	elevation: 3000
};

var California = {
	population: 3000000,
	sqmiles: 31000,
	elevation: 1500
};

var newArray = [
{
	population: 5000000000,
	sqmiles: 35000,
	elevation: 3000
},
{
	population: 5000000000,
	sqmiles: 31000,
	elevation: 3000
}];

[5000000000,31000,3000].reduce(function(x, y){
	return x * y;
})

newArray.map(function(size){
	return size.sqmiles;
})

newArray.forEach(function(height){
	console.log(height.elevation);
})

/////////////////////////////////////////////////////////////


var Maddox = {
	age: 7,
	weight: 49,
	height: 4
};

var Peyton = {
	age: 5,
	weight: 35,
	height: 4
};

var Ryanne = {
	age: 2,
	weight: 29,
	height: 2
};

var newArray = [
{
	age: 7,
	weight: 49,
	height: 4
},
{
	age: 5,
	weight: 35,
	height: 4
},
{
	age: 2,
	weight: 29,
	height: 2
}];

[7,49,4].reduce(function(x, y){
	return x * y;
});

newArray.map(function(heavy){
	return heavy.weight;
});

newArray.forEach(function(tall){
	console.log(tall.height);
});
///////////////////////////////////////////////////////////

var president = {
	age: 35,
	term: 8,
	income: 400000
};

var governor = {
	age: 30,
	term: 2,
	income: 250000
};

var newArray = [
{
	age: 35,
	term: 8,
	income: 400000
},
{
	age: 30,
	term: 2,
	income: 250000
}];

[30,2,250000].reduce(function(x, y){
	return x * y;
});

newArray.map(function(time){
	return time.term;
})

newArray.forEach(function(money){
	console.log(money.income);
})
///////////////////////////////////////////////////////////////

var Me = {
	age: 35,
	height: 6,
	weight: 225
};

var Mackenzie = {
	age: 27,
	height: 5.5,
	weight: 115
};

var newArray = [
{
	age: 35,
	height: 6,
	weight: 225
},
{
	age: 27,
	height: 5.5,
	weight: 115
}];

[35,6,225].reduce(function(x, y){
	return x * y;
});

newArray.map(function(tall){
	return tall.height;
});

newArray.forEach(function(heavy){
	console.log(heavy.weight);
});
/////////////////////////////////////////////////////////////

var beetle = {
	hrspwr: 56,
	maxspd: 70,
	passengers: 4
};

var bus = {
	hrspwr: 75,
	maxspd: 80,
	passengers: 8
};

newArray = [
{
	hrspwr:56,
	maxspd: 70,
	passengers: 4
},
{
	hrspwr: 75,
	maxspd: 80,
	passengers: 80
}];

[75,80,8].reduce(function(x, y){
	return x * y;
});

newArray.map(function(howmany){
	return howmany.passengers;
});

newArray.forEach(function(fast){
	console.log(fast.maxspd);
});

//////////////////////////////////////////////////////////////
