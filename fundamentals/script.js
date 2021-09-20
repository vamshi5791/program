let country="India";
let continent="Asia";
let population=12;
console.log(country);
console.log(continent);
console.log(population);


const isIsland=false;
let language="telugu";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
  


console.log(population / 2);
population++;
console.log(population);
let description=country+" is in " +continent+" , and its "+population+" million people speak "+language;

console.log(description);
const description1 = `${country} is in ${continent}, and its
 ${population} million people speak ${language}`;
 console.log(description1);

 if (population > 33) {
    console.log(`${country}'s population is above average`);
    } else {
    console.log(
    `${country}'s population is ${33 - population} million
    below average`,
    );
    }

 console.log('9' - '5');
 console.log('19' - '13' + '17'); 
 console.log('19' - '13' + 17); 
 console.log('123' < 57); 
 console.log(5 + 6 + '4' + 9 - 4 - 2); 

 
   
   const numNeighbours1 = Number(
    prompt('How many neighbour countries does your country  have?'),
   );
    if (numNeighbours1 === 1) {
    console.log('Only 1 border!');
    } else if (numNeighbours1 > 1) {
    console.log('More than 1 border');
    } else {
    console.log('No borders');
    }


    let language1="english";
    if(language=="english" && population<50 && country!=isIsland){
        console.log('you should live in'+country);
    }
    else{
        console.log(country+ 'does not meet your criteria:');
    }


    console.log(`${country} 's population is ${population > 33 ?' above':'below' } average`);

 //  console.log('my \n name is\n vamshi')
    console.log(`my
    name
    is`);

const age=19;
if(age>=18){
    console.log('sarah you are allowed to drive a car:');
}else{
    const ageleft=age-
}