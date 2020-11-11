var pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const  getAge = (pet) =>{
  new Date().getFullYear() - pet.bornOn;
}
/** 
var petsWithAge = [];
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  pet.age = getAge(pet);

  petsWithAge.push(pet);
}
console.log(petsWithAge);  */
const  getage = (params)=> {
   pets.map((petsWithAge)=>(petsWithAge.getAge , 
         petsWithAge.age ).
         return(
          petsWithAge.age = petsWithAge.getAge
         )
         )
}

/** 
var dogs = [];
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.type === "dog") {
    dogs.push(pet);
  }
}
console.log(dogs);
*/
const typespet= () =>{
    return pets.filter((dogs)=>{dogs.type === "dog" ;})
}

/** 
var jasper;
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.name === "Jasper") {
    jasper = pet;
  }
}
console.log("Jasper is " + jasper.age + " years old");
*/
const  nameAge =()=> {
    return pets.filter((dogs)=>{ dogs.name ==="jasper", console.log(`jasper is ${age} years old`)})    
}
