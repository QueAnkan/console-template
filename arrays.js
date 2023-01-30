// övning 9_1_a/b

// let numberList = [0,1,2,3,4,5,6,7,8,9]
/* console.log(numberList[5])
numberList.splice(3,1,5)
numberList.splice(5,1,3)
console.log(numberList) */

// eller
/* numberList[3] = 5
 numberList[5] = 3
console.log(numberList) */

// funktionen fungerar ej, varför???

/* function changePlace(numberList){
 numberList[3] = 5
 numberList[5] = 3
console.log(numberList)
}
changePlace(numberList)
console.log(changePlace(numberList))
 */

// ///////////////////////////////////////

// 9_2
// tes:  [2,3,4,5,6]

/* let list = [2]
for( let i=1; i<=5; i++ ) {
    let index = list[list.length - 1]
    let x = list[index]
    list.push(x + i)
    console.log(index)
}
console.log(list) */


// 9_3
// tes: [1,2,3,40,50,6,7,8,9,10]
/* let list = []
for( let i=1; i<=10; i++ ) {
    list.push(i)
    if( i > 3 && i < 6 ) {
        list.push(10 * i)
    }
}
console.log(list) */

// 9_4
// tes: list3 =[2,4,8,16,32,64] list2 = []
// 
/* let list1 = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
let list2 = [], list3 = []
for( let i=0; i<list1.length; i++ ) {
    if( list1[i] < 100 ) {
        list2.push( i )
        list3.push( list1[i] )
    }
}
console.log(list2,list3)
 */


//9_5
// tes: [20,21,22,23,24,25,26] 
/* let list1 = [10, 11, 12, 13, 14, 15,16]
let list2 = []
for( let i=0; i<list1.length; i++ ) {
    list2.push( list1[i] + 10 )
}
console.log(list2)
 */


// Övning 9_6 återkom till den
/* let randomNumber =[]


function randomInt(min, max) {
    let r = Math.random(min,max)
    i = r * (max - min + 1)
    return Math.floor(i) + min
}

for (let i=0; i <10; i++){
    randomNumber.push (randomInt(20,30))
}

 */

// Övning 9_7

/* let list = []
for(let i=1; i<=100; i++){
    list.push(i)
} */
//  console.log(list)

/* function sumArray(x){
    let total = 0
for(let i = 0; i <= x.length; i++){
        total += i	
}
    return total	
}
console.log(sumArray(list))  */

// eller:

/* function sumArray(array){
    let total = 0;
    array.forEach(i =>{
        total += i
    })
return total
}

sumArray(list)
console.log(sumArray(list)) */

// övning 9_8

let nautic = ['körde', 'jag', 'båt', 'min', 'natt', 'kulen', 'en']
let amphibic = ['se', 'att', 'lustiga', 'är', 'grodorna', 'små']


function reverseSong(text) {
    let song = text.reverse()
    return song
}
reverseSong(amphibic)

console.log(reverseSong(nautic))


/* function reverseSameSong(text){
       return text = text.reverse()
}
reverseSameSong(nautic)
reverseSameSong(amphibic)
console.log (nautic)
console.log (amphibic)
 */

// övning 9_9

