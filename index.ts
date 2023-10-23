import fs from 'node:fs';

const data = fs.readFileSync('./countries.txt', 'utf8');

const splitDataLine = data.split('\n');
let countryName: any[] = [];

splitDataLine.forEach(e => {
    countryName.push(e.split(' '));
})

let area: string[] =[];
let poblacion: string[] = [];
let countryNames: string[] = [];
let countriesReverse: any[]= [];

for(let j = 0; j < countryName.length; j++){
    countriesReverse.push(countryName[j].reverse());
    if(!isNaN(parseInt(countriesReverse[j][0]))){
        area.push(countriesReverse[j][0]);
    }

    if(!isNaN(parseInt(countriesReverse[j][1])) && parseInt(countriesReverse[j][1]) !== 0
    && parseInt(countriesReverse[j][1]) !== 1 && isNaN(parseInt(countriesReverse[j][2]))){
        poblacion.push(countriesReverse[j][1]);
        countryNames.push(countriesReverse[j].splice(2, countriesReverse[j].length).reverse());
    } 
}

/* console.log(poblacion.length)
console.log(countryNames.length) */
console.log(area)


let newCountries: string[] = [];






