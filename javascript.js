//მეექვსე დავალებას მსგავსია მეწერა თულუწია ლუწევშუამატებს თუკენტია კენტებში.
let array4=[1,2,3,4]
let odd =[];
let even = [];
for (let i = 0; i <array4.length; i++){
    const number1 = array4[i];
    if (number1 % 2 ===0) {
        console.log("ლუწებია");
        odd.push(number1);
        console.log(odd)
    }
    else{
        console.log("კენტებია");
        even.push(number1);
        console.log(even);
    }
}
//1
for (let i = 0; i <= 100; i++) {
  console.log(i);
}
//2
for (let i = 0; i <= 50; i++) {
    console.log(i);
}
//3
let person = ["nika", "luka", "gio", "gigi", "giga"]
person.push("alika");
console.log(person);
person.pop()
console.log(person)
person.shift(person)
console.log(person)
person.unshift("gizo")
console.log(person)
//4
x = []
for (let index = 0; index < 1000; index++) {
    y = index * index
    x.push(y)
}
console.log(x)
//5
array = [2,4,5,78,9];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
console.log(`ყველა ელემენტის ჯამია : ${sum}`)
//6
function isOdd(number) {
    return number % 2 !== 0;
  }
console.log(isOdd(5));
//7
function human(uppercaseString) {
    return uppercaseString.toLowerCase();
  }
console.log(human("MY NAME IS JOHN"));
//8
array6 = [1,2,3,15,6,36,78,23]
filter = []
for ( let i = 0; i < array6.length; i++ ){
    const local = array6[i];
    if (local % 2 === 0){
        filter.push(local)
    }
}
console.log(filter)

function myFunctiontwo() {
  var x = document.getElementById("burger")
  if (x.style.display == "block") {
    x.style.display = "none";
    
  } else {
    x.style.display = "block" ;   
  }
}

function myFunction() {
  var x = document.getElementById("searchh")
  var y = document.getElementById("bag")
  var z = document.getElementById("burger")
  if (x.style.display == "flex") {
    x.style.display = "none"
    x.style.height= "0px"
    y.style.display="none"
    z.style.display="none"
  } else {
    x.style.display = "flex" ; 
    x.style.height = "400px";
    y.style.display="none"
    z.style.display="none"
  }
}
function myFunctionthree() {
  var y = document.getElementById("searchh")
  var x = document.getElementById("bag")
  var z = document.getElementById("burger")
  if (x.style.display == "flex") {
    x.style.display = "none"
    x.style.height= "0px"
    y.style.display="none"
    z.style.display="none"
  } else {
    x.style.display = "flex" ; 
    x.style.height = "400px";
    y.style.display="none"
    z.style.display="none"
  }
}
