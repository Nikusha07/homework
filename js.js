let person = {
    firstName: 'luka',
    lastName: 'komladze',
    age: 23,
    birthday:2000,
    yearsalary:60000,
    gender: 'Male',
    occupation: 'IT',
    address: {
      street: '123 Main St',
      city: 'Exampleville',
      state: 'NY',
      country: 'USA'
    },
    hobbies: ['coding', 'traveling', 'shopping']
  }
let info = `my name is: ${person.firstName} my age: ${person.age} years, my addres: ${person.address.street}, it is now_${person.birthday + person.age} year`;
console.log(info);
console.log('month salary:', person.yearsalary/12 ,'$' );

let lenght = 7
let width  = 5
let fartobi =`მართკუთხედის ფართობია : ${lenght * width} მ.კვ`
console.log(fartobi)

function myFunctiontwo() {
  var x = document.getElementById("burger")
  if (x.style.display == "block") {
    x.style.display = "none";
    
  } else {
    x.style.display = "block" ;   
  }
}