let person = {
  firstName: 'nika',
  lastName: 'tefnadze',
  isRegister: true,
  age:20,
  address: {
    street: '123 Main St',
    city: 'Exampleville',
    state: 'NY',
    country: 'USA'
  },
  hobbies: ['coding', 'traveling', 'workout']
}
if (person.isRegister && person.age > 18){
console.log(`მე მქვია: ${person.firstName} ${person.lastName} linkdinze registrirebuli ${person.isRegister} ჩემი საყვარელი ჰობია: ${person.hobbies[2]}`)
}
else (console.log('daregistrirdi'))
let array = {
  slary: 20,
  fee: 30,
  age: [17],
  month: 8,
  day: 22,
}

console.log(`ყველა ელემენტის ჯამია : ${array.slary + array.fee + array.month + array.day}`)
let array2 = {
  name : ["luka", "nika"],
  age : 20,
  address :{
      city : "man unt",
      street : "sunit",
  }
}
console.log(`my name is ${array2.name[0]} / my age is : ${array.age[0]} my addres is : ${person.address.city}`);
if (array.age[0] > 18 ){
  console.log("სრულწლოვანია");
}
else (console.log("არასრულწლოვანია"))
let number = {
  date : 40,
  day : 30,
  age : 20,
  nom : 221,
  id : 2,
}
for (i in number)
console.log(number[i])
const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
    break;
}
if (currentDay === "wednesday"){
  console.log("hellow");
}











function myFunctiontwo() {
  var x = document.getElementById("burger")
  if (x.style.display == "block") {
    x.style.display = "none";
    
  } else {
    x.style.display = "block" ;   
  }
}