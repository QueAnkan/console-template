const worldData = [
	{ "name": "United Kingdom", "continent": "Europe", "population": 65270121, "pFemale": 0.508 },
	{ "name": "Republic of Ireland", "continent": "Europe", "population": 4708209, "pFemale": 0.499 },
	{ "name": "Australia", "continent": "Oceania", "population": 24482205, "pFemale": 0.502 },
	{ "name": "Taiwan", "continent": "Asia", "population": 23522296, "pFemale": 0.501 },
	{ "name": "Uruguay", "continent": "South America", "population": 3446772, "pFemale": 0.517 },
	{ "name": "Morocco", "continent": "Africa", "population": 35010005, "pFemale": 0.510 },
	{ "name": "Nigeria", "continent": "Africa", "population": 188688090, "pFemale": 0.494 },
	{ "name": "Zimbabwe", "continent": "Africa", "population": 16051510, "pFemale": 0.507 },
	{ "name": "China", "continent": "Asia", "population": 1381321335, "pFemale": 0.488 },
	{ "name": "Mexico", "continent": "North America", "population": 129386794, "pFemale": 0.507 },
	{ "name": "Canada", "continent": "North America", "population": 36446796, "pFemale": 0.504 },
   { "name":"Czech Republic", "continent":"Europe", "population":10556351, "pFemale": 0.509 },
	{ "name": "Iceland", "continent": "Europe", "population": 332631, "pFemale": 0.496 }
   ];
   

//    9_9_a
/* worldData.forEach(worldData =>{
console.log(worldData.name)
})
 */

/* let lands = worldData.map(worldData =>worldData.name)
	console.log(lands) */

// 9_9_b

/* function findCountry(sort){

let sortedCountries = worldData.filter(worldData => worldData.continent == 'Africa')

return(sortedCountries.find(result=> result.continent))
}
findCountry(worldData)
console.log(findCountry(worldData)) */


// 9_9_c


/* let australia = worldData.filter(worldData => worldData.name =='Australia')
let populationOfAustralia = australia.map(pop => pop.population)
let partFemalePopulation = australia.map(pop => pop.pFemale)
console.log (Math.round(partFemalePopulation[0]*populationOfAustralia[0])) */


// 9_9_d 

/* let newWorldData = worldData.map((element) => ({...element, women:Math.round(element.population*element.pFemale), men: Math.round(element.population -element.population*element.pFemale)}
))

console.log(newWorldData.map(({name, women , men}) =>({name, women, men}))) */



// 9_9_e

/* let europe = worldData.filter(cont => cont.continent =='Europe')

let populationEuropeanLands = europe.map(pop => pop.population)

let totalEuropeanPopulation = populationEuropeanLands.reduce((total, curValue) => total + curValue, 0 )

console.log(totalEuropeanPopulation) */


//  9_9_f

/* let firstLargeCountry = worldData.find(large => large.population> 100000000)
console.log('first country with a population over 100 million is' , firstLargeCountry) */

// 9_9_g

/* let lessFemales = worldData.filter(less => less.pFemale< 0.49)
console.log( 'Countries with less then 49% women: ' , lessFemales) */


// 9_9_h

/* let iceland = worldData.find(land =>land.name =='Iceland')
console.log(iceland.population) */
