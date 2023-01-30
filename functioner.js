import { question } from 'readline-sync'

// let x = 2;
// let y = 3;
// let a = foo(foo(x) + foo(y));
// console.log(a);   
// function foo(i) {
//        return 5 * i;
//    }
// 
// a = foo (5*2) + (5*3)
// a = 5*25
// a = 125

// let a=5
// function foo(a){   //a inuti funktionen 
// 	a++
// }
// a +=2



/* let foo = function(i) {
	        return 2*i*i;
	    };
	    let goo = function(x, y)
	    {
	        return x(y);
	    };
	    let a = goo(foo, 3);
	    console.log(a);
	 */


//Övning 6_5_1 skriv funktionen som anonym:

/* function f(x){
	return x * 2 +1
}
function g(x, y) {
    console.log(x + ', ' + y)
} */

// dvs:
/* const f = function(x){
	return x 2 + 1
}

const g = function(x, y){
	console.log(x + ', ' + y)
}

const f = x => x 2 + 1
const g = (x,y) => console.log(x + ', ' + y) */



// Övning 6_2
/* let name = question('what is your name?')
let city = question('where do you live?')
let color =question('What is your favourite color?') 
function person(name,city,color){
	console.log(`Welcome ${name} from ${city} with favourite color ${color}`)
} 
person(name, city, color) */


// övning 6_3_a
/* function add(x,y){
	return x + y
}
add(3,4)
console.log(add(3,4)) */


// övning 6_3_b (om man anropar funtionen med färre tal än 3 får man NaN. Man kan skriva z+1 som default-värde, då blir det ett värde på den och man kan räkan med bara 2 tal utan att det påverkar uträkningen. Man kan ge default-värde på alla parametrar.)
/* function multi(x,y,z){
	return x*y*z
}
multi(2,3,4)
console.log(multi(2,3,4)) */



// övning 6_3_c
/* function multi(x, y, z) {
	return x * y * z
}
function add(a) {
	return a
}
function calc(multi, add){
	return multi+add
}

console.log(calc(multi(4,5,5),add(2))) */

// Tips! lägg funktionerna som variabler inuti function calc istället, bättre abstraction



// Övning 6_4
/* let input =('fr 1')
function numbify(input){
	if (isNaN(input)){
		return String(input)
	}
	return Number(input)
	
}
console.log(numbify(input)) */



// Övning 6_5 

/* function sameDataType(a,b){
 if(typeof(a) == typeof(b)){
	return typeof(a , b)
 }
 else {
	return 'Not the same data type!'
} 
}

console.log(sameDataType('apa',3)) */

// /////////////////////////////////////

// Övning 6_6

/* function roundUppDown(a){
	
	return Math.round(a*100)/100 
}

console.log(roundUppDown(3.456)) */

///////////////////////////////////////////

// övning 6_7_a

/* function paragraph(x){
	return'<p>'+ x + '<p>'
}

paragraph('hej')
console.log(paragraph('hej')) */

// ! Bättre variabelnamn, t ex content ist för x, elegantare med => return <p>${content}</p> 


// övning 6_7_b
/* 
function tag(z, y){
	return '<' + z + '>' + y + '</' + z + '>'
}

console.log(tag('style', 'content')) */

// ! Samma som i förra övningen, bättre namn och snyggare return.

// /////////////////////////////////////////

// övning 8


function howManyDays(x){
	if (x == 'apr' && 'jun' && 'sep' && 'nov' ){
	return 30
	}
	else if (x == 'feb'){
		return 28
	}
	else {
		return 31
	}
}
console.log(howManyDays('feb'))


// ////////////////////////////////////


// övning 6_9_a
/* function startindex(w){
  return w.substring(0,3)
}
console.log(startindex('frontend'))
 */

// övning 6_9_b


/* let ask = new Date(question('Please enter a date with the format yyyy-mm-dd : '))
 let date= String(ask)
function year(date){
	return date.substring(11,16)
}
console.log(year(date))
 */
 
// bättre alternativ! :


/* let ask = new Date(question('Please enter a date with the format yyyy-mm-dd : '))
const date= ask.getFullYear()
function year(date){
	return date
}
console.log(year(date)) */

// eller så här....
/* 
function year(date){
	return date.substring(0,4)
} 
const now = '2023-01-23'
console.log('året är' + year(now)*/



// Övning 6_9_c

/* function daysBetween(firstDate,secondDate){

	let dateA = new Date(firstDate)
	let dateB = new Date(secondDate)
  console.log(dateA,dateB)

	let dayA = dateA.getDate()
	let monthA = dateA.getMonth()
 	let yearA = dateA.getFullYear()
	let dayB = dateB.getDate()
	let monthB = dateB.getMonth()
	 let yearB = dateB.getFullYear()
	console.log (yearA, yearB, dayA, dayB, monthA, monthB)
	
	return (((yearB)-(yearA)-1)*365) + (30-dayA) + dayB + (((monthB)-(monthA)-1)*30)
	
}

console.log(daysBetween('2020-11-30','2022-01-02') */

// ovan fungerar inte när månadB är mindre än månadA...


// Kolla Davids lösning!!!


// ///////////////////////////////////////


// Övning 6_10/
/*  function temperatureConverter(t){
	return Math.round( ((t-32)*5/9)*10)/10 + '°C'
}
temperatureConverter(33)
console.log(temperatureConverter(33)) */



// övning 9_11_a

/* function add(){
	let total = null
	let count = 0
	while (count <=100 ){
		total = total + count	
		count++
}
	return total
	
}
console.log(add()) */

// övning9_11_b

/* function add( numberOfNumbers){
	let total = null
	let count = 0
	while (count <=numberOfNumbers ){
		total = total + count	
		count++
}
	return total	
}

console.log(add(100)) */


// övning 9_12

// loopen ska börja att skriva ut sista bokstaven, då måste den börja på sista position (ordet.length)
// sedan ska den ändra position med -1
// komma ihåg tidigare svar och sedan lägga ihop dem
// fortsätt loopa tills den är på position 1

/* function reverseText(t){
let text = ''
	
	for (let position = t.substring(t.length); position<t.length; position++ ){
		text = t.charAt(position) + text  
		}
	return text
}

console.log(reverseText('hello world')) */


/* function randomInt(min, max) {
    let r = Math.random(min, max)
    r = r * (max - min + 1)
    return Math.floor(r)
}
console.log(randomInt(1,7 */
