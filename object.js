// övning8_1 / 8_2

/* let city = {
	name: 'Fairytown',
	population: 300200,
	Country: 'Sweden',


}

function move(city) {
	city.population = city.population-1
}

move(city)
console.log (city) */

// //////////////////////////////////////////////////

// övning 8_2

/*  let person = {
	name: 'Julia',
}
function samePerson(person){
let copy = {...person}

	console.log (copy) 
}
samePerson(person)
console.log(samePerson(person)) */

// //////////////////////////////////////////////////

// övning 8_3

/* function property(city){
for (let prop in city){
	console.log( 'this is the ', prop)
}
}
property(city)
console.log(property(city)) */

// ////////////////////////////////////////////////

// Övning 8_4
 
const school = {
		Teachers: 20,
		Students: 256,
		Adress: 'Skolgatan 1',
		City: 'Nyköping',
}

const teachers = {

	Björn: ['musik'],
	Benny: ['NO' , 'teknik'],
	Birgitta: ['AI' , 'svenska'],

}

const months = {

	'31 Days': ['januari', 'mars', 'maj', 'juli', 'augusti', 'oktober', 'december'],
	'30 Days': ['april', 'juni', 'september', 'november'],
	'28 Days': ['februari'],
	'29 Days': ['februari']
}

const tamburins = {
	products: {
	T1: {price:200},
	T2: {price:250},
	T3: {price:320},
	},
	employees: ['Hasse', 'Hedwig', 'Hermione']
	
}