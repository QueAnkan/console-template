import { question } from 'readline-sync'

// övning 6_a:

// let firstNumber = Number(question('Please enter a number '))
// console.log(firstNumber)
// let secondNumber = Number(question('Please enter another number '))
// console.log(secondNumber)
// let addSum = firstNumber + secondNumber
// let subSum = firstNumber - secondNumber
// let multiSum = firstNumber * secondNumber
// let divSum = firstNumber / secondNumber
// console.log (`The sum of ${firstNumber} and ${secondNumber} is: `) 
// console.log (`${addSum} with addition, `) 
// console.log (`${subSum} with substraction, `) 
// console.log (`${multiSum} with multiplication `)
// console.log (`and ${divSum} with division `)


// Övning 6_b:

// let firstNumber = Number(question('Please enter a number \n'))
// let mathMethod = question('Please enter a calculation method (+ - * / )  \n')
// let secondNumber = Number(question('Please enter another number \n'))


// if (mathMethod == '+' ) { let sum = firstNumber + secondNumber 
// 	console.log(` \n ${firstNumber} ${mathMethod} ${secondNumber} = ${sum}  `)
// }
// else if (mathMethod == '-'){  let sum = firstNumber - secondNumber
// 	console.log(` ${firstNumber} ${mathMethod} ${secondNumber} =  ${sum}`)
// }
// else if (mathMethod == '*'){ let sum = firstNumber * secondNumber
// 	console.log(`= ${firstNumber} ${mathMethod} ${secondNumber} =  ${sum}`)
// }
// else if (mathMethod == '/'){ let sum = firstNumber / secondNumber
// 	console.log(`= ${firstNumber} ${mathMethod} ${secondNumber} =  ${sum}`)
// }
// else{
// 	console.log('invalid value')
// }


//övning 7_a:

// for (let count = 0; count <16; count++){
// console.log(count + 1)
// }


// övning 5_1a (+ en liten tvist :P ):

// let decision = question('Choose when the program stops counting, enter a number between 1 and 16  ')
// if (decision>16){
// 	console.log('invalid value! ')
// }
// else{
// for (let count = 0; count <decision; count++){
// 	console.log(count +1)
// }
// }


// övning5_1b:

// for (let count = 65536; count>2; count = count/2){
// console.log(count)
// }


// let decision = question('Choose a number lower than 65536 ')
// for (let count = decision; count>2; count = count/2){
// 	console.log(count)
// }




// övning 5_3

// let input = question('Please write some words of your choice:  ' )

// let i = ' '

// while (i !='' || '.' ){
	
// 	// console.log(i)
// 	input= question('Please write some words of your choice:  ' )
// 	i = i + input

// 	if(input = '' || '.'){
// 		break
// 	}
// 	let text = input.concat(i + input)
// 	console.log(text)
// }

// console.log('welcome to the sentence builder')

// fråga efter en sträng
// sätt ihop med en tidigare
// är det tom sträng eller punkt
// om inte, fråga igen (upprepa från början)

// let sentence =  ''
// let input = null
// while( input !== '' && input !=='.'){
// let input = question('Please enter a word: ')
// }


// övning 5_4

for (let count = 20; count>0; count = count-2){
	console.log(count)
}
