import fs from 'node:fs';

const data = fs.readFileSync('./file/countries.txt', 'utf8');

const splitDataLine = data.split('\n');
let countryName: any[] = [];

splitDataLine.forEach(e => {
    countryName.push(e.split(' '));
})

let area: string[] =[];
let poblacion: string[] = [];
let countryNames: string[] = [];
let countriesReverse: any[]= [];
let densidad: number[] = [];
let newCountries: any[] = [];

for(let j = 0; j < countryName.length; j++){
    countriesReverse.push(countryName[j].reverse());
    if(!isNaN(parseInt(countriesReverse[j][1])) && parseInt(countriesReverse[j][1]) !== 0
    && parseInt(countriesReverse[j][1]) !== 1 && isNaN(parseInt(countriesReverse[j][2]))){
        if(!isNaN(parseInt(countriesReverse[j][0]))){
            area.push(countriesReverse[j][0]);
        }
        poblacion.push(countriesReverse[j][1]);
        countryNames.push(countriesReverse[j].splice(2, countriesReverse[j].length).reverse());
    }   
}

poblacion.forEach((p, i)=> {
    let population: number = parseInt(p.replace(/,/g, ''));
    let arasCalc: number = parseInt(area[i].replace(/,/g, ''));
    let calc: number = population / arasCalc;
    densidad.push(parseFloat(calc.toFixed(1)));
})

countryNames.forEach((names, i) => {
    newCountries.push({name: names.toString().replace(/,/g, ' '), density: densidad[i]})
})

const formatedCountries: any = newCountries.sort((a, b) => b.density - a.density)

for (let i = 0; i < formatedCountries.length; i++) {
    fs.writeFileSync("./file/countries.csv",
      " Country: " + formatedCountries[i].name + ", Density: " + formatedCountries[i].density + "\n",
      {
        encoding: "utf8",
        flag: "a+",
        mode: 0o666
      });
  }
   












