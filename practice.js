// let array = [12, 45, 78, 23];

// function average(nums) {
//   let length = nums.length;
//   let sum = 0;
//   for (let i = 0; i < length; i++) {
//     sum = sum + nums[i];
//   }

//   return (avr = sum / length);
// }

// console.log(average(array));

// let num = 34;

// function isEven() {
//   if (num % 2 == 0) {
//     console.log(`It's Even`);
//   } else {
//     console.log(`It's not a even`);
//   }
// }

// isEven();

// function convart(c) {
//   let f = (c * 9) / 5 + 32;

//   return f;
// }
// let c = 50;
// console.log(convart(c));

// let num = [23, 76, 33, 72, 89, 58, 32];

// function sum(nums) {
//   let length = nums.length;
//   sum = 0;
//   for (let i = 0; i < length; i++) {
//     sum = sum + nums[i];
//   }

//   return sum;
// }

// console.log(sum(num));

// function convertInches(feet) {
//   console.log(feet * 12);
// }
// convertInches(40);

// function convertKM(Miles) {
//   console.log(Miles * 1.6);
// }

// convertKM(10);

// let numbers = [23, 76, 33, 72, 89, 58, 32];
// function oddnumber(nums) {
//   let length = nums.length;
//   let sum = 0;
//   for (let i = 0; i < length; i++) {
//     if (nums[i] % 2 !== 0) {
//       sum = sum + nums[i];
//     }
//   }
//   console.log(sum);
// }

// oddnumber(numbers);

// let n = 5;

// function factorial(n) {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum = sum * i;
//   }
//   return sum;
// }

// console.log(factorial(n));

// function multipul(x, y) {
//   let mul = x * y;
//   return mul;
// }

// console.log(multipul(5,10));

// let text = "hello world, welcome to the end with";

// let end = text.endsWith("to", 23);

// console.log(end);

// let start = text.startsWith("hello");
// console.log(start);

// const persons = [
//   { firstname: "Malcom", lastname: "Reynolds" },
//   { firstname: "Kaylee", lastname: "Frye" },
//   { firstname: "Jayne", lastname: "Cobb" },
// ];

// let x = persons.map(getFullName);

// function getFullName(item) {
//   return [item.firstname, item.lastname].join(" ");
// }

// console.log(x[0]);

// const hey = "habibulla islam habib";

// let y = hey.split("");

// console.log(y);

// let a = "onnokichu ";
// let b = "onnokichu 2";

// let add = (a, b) => {
//   console.log(`${a} ${b}`);
// };

// add(a, b);

// let c = [2, 4, 5, 6, 6, 7];

// let d = [...c, 5, 3, 6, 10, 44, 22];

// console.log(d);

// console.log(Math.max(...d));

// let x = 5.5;
// console.log(Math.c(x));

// let y = -2;
// console.log(Math.abs(y));

// let num = [1, 3, 4, 5, 3, 7, 6, 9, 3, 2];
// var result = num.find(function (currentvalue, currentIndex, Array) {
//   console.log(currentIndex);
//   console.log(Array);

//   return currentvalue > 6;
// });
// console.log(result);

// class student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   test() {
//     console.log(this.name);
//   }

//   exampleFunction() {
//     let array = [2, 4, 5, 6, 7];
//     array.find(() => {
//       this.test();
//     });
//   }
// }

// let students = new student("habib", 21);

// students.exampleFunction();

// let x = 5;
// let z = 9;

// let condition = x > z ? console.log("x is big") : console.log("z is big");

// let x = [3, 5, 7, 5, 8, 1,5,3, 3, 5, 6, 7];

// let result = x.findIndex((currentValue, currentindex, arrr) => {
//   // console.log(currentValue);
//   // console.log("------------------");

//   // console.log(currentindex);

//   // console.log(arrr);

//   return currentValue > 6;
// });

// console.log(result);

// let x = [3, 5, 7, 5, 8, 1,5,3, 3, 5, 6, 7];

// let filtter = x.filter((currentValue,currentindex,arr)=>{

//   return currentValue >5;

// })

// // filter return the new arry for maintain the contdition

// console.log(filtter);

// let a = [1, 2, 3, 5, 6, 8, 9];

// let b = a.slice(1, 3);

// console.log(a);

// let sp = [1, 23, 4, 5, 6, 6];

// let aftersp = sp.splice(2,2,7, 9, 12);

// console.log(sp);
// console.log(aftersp);

// let aray1 = [1, 23, 4, 5, 6, 7];
// let aray2 = [1, 23, 4, 5, 6, 9];
// let aray3 = [1, 23, 4, 5, 6, 1];
// let aray4 = [1, 23, 4, 5, 6, 4];

// let array5 = aray1.concat(aray2, aray3, aray4);

// console.log(array5);
// console.log(aray1);

// let x = [1, 23, 4, 5, 6, 7];
// x.shift()
// x.unshift(5)

// let y = x.push([2, 3, 5, 7, 9]);

// console.log(x);

// console.log(x[6][4]);

// console.log(y);

// let x = [1, 23, 4, 5, 6, 7];

// let y = x.map((val)=>{
//   return val*2;
// })

// console.log(y);

// let num= [1,2,4,5,6,7,98]

// let sum = num.reduce((prevvalue,currentvalu)=>{

//   return prevvalue+currentvalu;

// },0)

// console.log(sum);

// let x = {
//   name: "habibulla",
//   age: 21,
//   country: "bangladesh",
// };

// for(l in x){
//   console.log(l);

// }

// let habibulla= 'I love You';

// for(h of habibulla){
//   console.log(h);

// }

// let obj = {
//   name: "habibulla",
//   age: 32,
//   contry: "bangladesh",
//   work: "student",
// };

// let key = Object.keys(obj);
// let value = Object.keys(obj);
// let entries = Object.entries(obj);

// console.log(key);
// console.log(value);
// console.log(entries);

// function sum(x=9, y=6) {
//   return x + y;
// }
// x=5
// console.log(sum(x));

// let arr = [3, 4, 67, 8, 4, 3];
// let arr2 = [4, 3, 7, 22, 88];

// let array3=[...arr,...arr2]

// console.log(array3);

// let obj1={
//   name:'habib',
//   age:31,
// }

// let obj2={
//   height:5.9,
//   weight:60
// }

// let obj3={...obj1,...obj2}
// console.log(obj3);

// let de = [1, 3, 5, 6, 8, 9,66,22,67,99,62];

// let { [3]: num1, [4]: num2 } = de;
// let [, , , a,b] = de;

// let [,,s,,t,...rest]= de;

// console.log(num1, num2);
// console.log(a, b);
// console.log(rest);

// let objde = {
//   name: "habibulla",
//   age: 21,

//   educataion: {
//     degree: "diploma",
//   },
//   session: {
//     Year: 2020,
//   },
// };

// let {
//   educataion: { degree: dg, session: { Year } = {} },
//   subject = "computer",
// } = objde;

// console.log(dg, subject);

// console.log(subject);

// let objde = {
//   name: "habibulla",
//   age: 21,

//   educataion: {
//     degree: "diploma",
//     Year: 2020,
//   },
//   session: {},
// };

// let {
//   educataion: {degree : dg}  ,

// } = objde;

// let {
//   session: { Year: se },
// } = objde;

// console.log(dg);

// // console.log(se);

// let arr = [2, 5, 6, 7, 8, 9];

// let sum = 0;

// let add = arr.map((num) => {
//   return (sum += num);
// });

// console.log(sum);

// let red = arr.reduce((prevvalu, currentval, currentindex) => {
//   return prevvalu + currentval;
// });

// console.log(red);

// let names = ["sami", "hasib", "shanto", "eyasin"];

// let upper = names.map((nam) => {
//   let up = nam.toUpperCase();
//   console.log(up);
// });

// function problem1(num1, num2 = 3) {
//   console.log(num1 + num2);
// }

// problem1(5);

// function problem2(name, city) {
//   console.log(`Hey Md.${name} I Think are you from ${city} `);
// }
// problem2("habibulla", "Faridpur");

// let x = [3, 5, 7, 8, 55];

// let problem3 = (num, num3) => {
//   return num * num3;
// };

// let p3 = x.reduce(problem3, 1);

// console.log(p3);

// let arr1 = [2, 5, 6, 22.44, 77];
// let arr2 = [99, 33, 12, 55, 66];

// let arr3 = [...arr1, ...arr2];
// console.log(arr3);
// let y = arr3.find((item) => {
//   console.log(item > 60);

//   return item > 50;
// });

// console.log(y);

// let object = {
//   name: "Habibulla",
//   age: 21,
//   country: {
//     city: "Dhaka",
//     country: "Bangladesh",
//   },
//   study: {
//     diploma: "computer",
//     skill: "js Developer",
//   },
// };

// let { name: na } = object;

// console.log(na);

// let { country: { country: bd } = {} } = object;

// console.log(bd);

// let {
//   study: { skill: sk, diploma: dp },
// } = object;

// console.log(sk);
// console.log(dp);

// let arr = [3, 7, 8, 4, 2, 1];

// let [a, b] = arr;
// console.log(a, b);

// let optchaining = object.country?.city;

// console.log(optchaining);

// let student = [
//   { name: "habib", marks: 55 },
//   { name: "sahedrohman", marks: 99 },
//   { name: "anas", marks: 88 },
//   { name: "yeasin", marks: 98 },
// ];

// let maps = student.map((item) => {
//   return item.name;
// });
// console.log(maps);

// let filters = student.filter((item) => {
//   return item.marks >= 80;
// });

// filters.forEach((item) => {
//   console.log(item.name, item.marks);
// });

// let finds = student.find((item) => {
//   return item.marks > 80;
// });

// console.log(finds);

// let products = [
//   { name: "apple", price: 280 },
//   { name: "Orange", price: 250 },
//   { name: "Mango", price: 80 },
//   { name: "capsicum", price: 500 },
//   { name: "grapes", price: 380 },
//   { name: "Guava", price: 50 },
// ];

// products.forEach((item) => {
//   console.log(`Products-Name:${item.name} And Price:${item.price} `);
// });

// let pb = "this is a problem 9";

// let problem9 = pb.split(' ');

// console.log(problem9);

// problem9.map(item=>{
//   console.log(`${item} Hello`);
// })

// let problem10 =products.filter(item=>{
//   return item.price < 100;
// })

// console.log(problem10);

// let array = [1, 2, 70, 30, 1, 8, 15, 15];
// let x;
// let y;
// let newArray = array.filter((value, index, array) => {

//  return array.indexOf(value)==index;

// });

// console.log(newArray);

// let array = [1, 2, 70, 30, 1, 8, 15, 15];
// let num;
// let newArray = array.filter((value,index,arr)=>{
//   num =value;
//   for(i=0;i<arr.length;i++){
//     if(value == arr[i]){

//       return;

//     }
//     else{

//       return value;

//     }

//   }

// })

// console.log(newArray);

// const array = [1, 2, 70, 30, 1, 8, 15, 15];
// const uniqueOnce = array.filter((value, index, self) => {
//   self.indexOf(value) === self.lastIndexOf(value);
// });
// console.log(uniqueOnce);

// const array = [1, 2, 70, 30, 1, 8, 15, 15];
// const counts = {};

// for (let i = 0; i < array.length; i++) {
//     const value = array[i];
//     counts[value] = (counts[value] || 0) + 1;

//     console.log(counts);

// }

// console.log("----------------");

// console.log(counts);

// const uniqueOnce = [];
// for (let i = 0; i < array.length; i++) {
//     const value = array[i];
//     if (counts[value] === 1) { // add values
//         uniqueOnce.push(value);
//     }
// }

// console.log(uniqueOnce); // Output: [2, 70, 30, 8]

// const array = [1, 2, 70, 30, 1, 8, 15, 15];
// let element = [];

// let item;
// let newarray = array.filter((value,index,array)=>{

//   for (let index = 0; index < array.length; index++) {

//     if(value !== array[index]){
//       item = array[index];
//       element= item;

//     }

//   }

// })

// console.log(element);

// console.log(newarray);

// const array = [1, 2, 70, 30, 1, 8, 15, 15];
// const uniqueOnce = array.filter((value, index, self) => {
//   self.indexOf(value) === self.lastIndexOf(value);
// });
// console.log(uniqueOnce);

// const array = [1, 2, 70, 30, 1, 8, 15, 15];
// const uniqueArray = array.filter((value, index) => array.indexOf(value) === array.lastIndexOf(value));
// console.log(uniqueArray);

// const array = [1, 2, 70, 30, 1, 8, 15, 15];
// let element = [];

// let item;

// let a = array.filter((item)={

// })

// console.log(x);

// function bbbbb(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return i;
//     }
//   }
//   return -1; // Return -1 if the element is not found
// }

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j =i+1 ; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };
// let case2 = [3,2,4,]
//  let x = twoSum(case2, 6);
//  console.log(x);

//  var userinfo ={
//   names:'Habibulla',
//   age: 21,
//   social:{
//     ac1:'32303932',
//     ac2:'2339994',
//   },
//   twitter:{
//     free:{
//       ac1:'habibulla333'
//     },
//     paid:{
//       ac3:'Habu3993'
//     }
//   }
//  }
// function makeDeepCopy(obj){
//   if(typeof obj !== 'object' || obj== null ){
//     return obj;
//   }

//   var copiedval =Array.isArray(obj) ? []:{};
//   console.log(Object.keys(obj));

//   var keys = Object.keys(obj);

//   for(var i=0;i<keys.length;i++){
//     copiedval[keys[i]]=makeDeepCopy(obj[keys[i]]);
//   }

//   return copiedval;
// }

// var copy =makeDeepCopy(userinfo)
//  copy.twitter.paid.ac3 = 'tamu';

// console.log(copy.twitter.paid);
// console.log(userinfo.twitter.paid);

// function func() {
//   let count = 0;
//   return function () {
//     return (count += 1);
//   };
// }

// let add = func();

// function addcount() {
//   document.getElementById("div1").innerText = add();
// }

// //mutable immutable

// let x = "habibulla";
// let y = x;

// y = "habib";
// console.log(x);
// console.log(y);

// //mutable
// let obj = {
//   name: "habibulla",
//   age: 21,
// };

// let obj2 = obj;
// obj2.name = "apple";
// console.log(obj);
// console.log(obj2);

// let arr = ["tamim", "sakib", "mutable"];

// let arr2 = arr;

// arr2[0] = "immutable";

// arr.push("khalid");
// console.log(arr);
// console.log(arr2);
// console.log(arr);

// //hoisting
// var hos;

// hos = 5;
// hos = 8;
// console.log(hos);
// var hos;
// letdata = 5;

// console.log(letdata);
// let letdata;

// const constval = 5;
// console.log(constval);

// let arr3 = [1, 2, 5, 6, 7, 9, 5, 88];

// let array3 = arr3.reduce((prev, curre, index, arr) => {
//   console.log(prev);

//   return prev + curre;
// }, 0);
// console.log(array3);

// let slice = arr3.slice(1, 3);
// console.log(arr3);
// console.log(slice);

// arr3.splice(2, 0, "habib", "habu");
// console.log(arr3);

// let inde = arr3.lastIndexOf(5);
// console.log(inde);

// iterator

// function makeIterator(start = 0, end = Infinity, step = 1) {
//   let nexindex = start;
//   let iteratorCount = 0;
//   return {
//     next() {
//       let result;
//       if (nexindex < end) {
//         result = { value: nexindex, done: false };
//         nexindex += step;
//         iteratorCount++;
//         return result;
//       }
//       return { value: iteratorCount, done: true };
//     },
//   };
  
// }

// let myiterator =makeIterator(1,20,2);
// let result= myiterator.next();
// while(!result.done){
//   console.log(result.value);
//   result =myiterator.next();
  
// }


function* makeIterator (start=0,end=Infinity,step=2){
 let  letcounter =0;
  for(let i=start;i<end;i+=step){
    letcounter++;
    yield i;
  }
  return letcounter;
}

let one =makeIterator(1,10,2);

for(let v of one){
  console.log(v);
  
}

function* number(){
  let i=0;
  while(true){
    yield i++;
  }
}

let gen =number();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());



let person={
  name:'habibulla',
  age: 21

  
}

person.prototype={
  ages:25,
  names:'habu'
}

console.log(person);
console.log(person.prototype);




persons.prototype={
  play(){
    console.log('person play football');
    
  }
}
function persons(name,age){
  let person=Object.create(persons.prototype);
  person.name= name;
  person.age=age;

  return person
}


let pr =persons('habib',29);
console.log(pr);

pr.play();
console.log(pr.name);

function person3(name,age){
  
  this.name=name;
  this.age=age;

}
person3.prototype={
  play(){
    console.log('he play football');
    
  },
  sleep(){
    console.log('person sleeping');
    
  }
  
}

let text =new person3("prototype", 33);
console.log(text);

let user ={
  name:'john',
  surname:'smith',
  set fullName(value){
    console.log('fullname value');
    
    console.log(value);
    
    [this.name,this.surname]= value.split(' ');
  },
  get fullName(){
    return `${this.name} ${this.surname}`;
  }
}

let addmin={
  __proto__:user,
  isAdmin:true
}

alert(user.fullName);
alert(addmin.fullName);
addmin.fullName = 'Alic Cooper';

alert(addmin.fullName);

alert(user.fullName);