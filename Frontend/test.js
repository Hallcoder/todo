class Car{
    constructor(name,price){
        this.name = name;
        this.price =  price;
        this.start  = ()=>{
            console.log(`${this.name} is starting buuuuuuuuuum!!!!`);
        }
    }
}

let volvo = new Car('volvo','$120000');
volvo.start()
console.log(volvo.price);
const studentsAge = [10,14,23,18]
console.log(studentsAge.find(myfunction))
function myfunction(value,index,array){
if(value>18)
  return array;
}

console.log(volvo.name)

//Getters and Setters

const person = 
{
    name:"Aimable",
    age:'18',
    spokenLanguage:'English',
    DOB:new Date(),
    get lang(){ 
        return  this.spokenLanguage
    },
    set ageSetter(age){
     return   this.age=age
    }

}

console.log(person.spokenLanguage)
console.log(person.lang);
console.log(`Age before using a setter : ${person['age']}`);
person.ageSetter = 24
console.log(`Age after using a setter : ${person.age}`);
let x = document.forms[' ']