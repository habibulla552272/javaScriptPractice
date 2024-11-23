// let score = prompt("Enter your number");
// let grade;

// if (score >= 80) {
//   grade = "A+";
// } else if (score >= 70) {
//   grade = "A";
// } else if (score >= 60) {
//   grade = "B";
// } else {
//   grade = "F";
// }
// console.log(grade);

// let row = 8;
// let rowtree = 12;

// let allrowtree = row * rowtree;

// let totaltree = allrowtree + 20;

// let finalresult = "The Garder total tree are =" + totaltree;

// console.log(finalresult);
// console.log("the file show");

// const number = [10, 20, 5, 7, 30];

// number.forEach(myfunction);

// function myfunction(item, index, arr) {
//   arr[index] = item * 10;
//   console.log(index);
//   console.log(arr);
// }
// console.log(number);

//practice 1

// let gamenumber = 25;

// let userNum = prompt("Guess the game number : ");

// while (userNum != gamenumber) {
//   userNum = prompt("Wrong number  : Try Again : ");
// }

// console.log("Congratulation you guess the right number :" + gamenumber);

// let str = "123456789 ";
// console.log(str.slice(1, 4));

// let str2 = "habibulla ";

// let type = typeof str;
// console.log(type);

// let concat = str.concat(str2);
// console.log(concat);

// console.log(str2.replace("h", "L"));

// console.log(str2.charAt(5));

// practice 2
// let fullName = prompt("Enter your Full Name : ");

// let Firstconcat = "@".concat(fullName);

// let secondconcat = Firstconcat.concat(fullName.length);

// console.log(secondconcat);

// practice 3

// let studentMarks = [50, 60, 70, 39, 89, 90, 50];

// let sum = 0;
// for (let i of studentMarks) {
//   sum = sum + i;
// }

// console.log("Averare Mark is :", sum / studentMarks.length);

// practice 4

// let price = [400, 450, 300, 600, 700];

// for (let i = 0; i <= price.length; i++) {
//   let offerPrice = price[i] / 10;
//   price[i] = price[i] - offerPrice;
// }

// console.log("After Offer Price :", price);

// practive 5

// let companies = ["Bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];

// console.log(companies);

// let a = companies.shift();

// console.log(companies);

// let b = companies.splice(1, 1, "ola");

// console.log(companies);

// let c = companies.push("Amazon");

// console.log(companies);

// console.log(companies.toString);

//practice 6

// let arr = [5, 10, 4, 3, 6, 7];
// let arr2;

// arr.forEach(squarfunction);

// function squarfunction(val) {
//   let arr = val * val;

//   console.log(arr);
// }

// practice 7
// let studentMarks = [80, 90, 92, 70, 98, 89];

// let newArra = studentMarks.filter((val) => {
//   return val >= 90;
// });

// console.log(newArra);

// practice 8

// let n = prompt("Enter the number :");

// let arr = [];

// for (i = 1; i <= n; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);

// let arr2 = arr.reduce((res, cuur) => {
//   return res + cuur;
// });
// console.log(arr2);

// let fac = arr.reduce((res, cur) => {
//   return res * cur;
// });

// console.log(fac);

// let index = arr.indexOf(0);
// console.log(index);

// practice 9

// let newbtn = document.createElement("button");
// newbtn.innerText = "Click Me";
// newbtn.style.background = "red";

// document.querySelector("body").prepend(newbtn);

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.clientx, evt.clienty);
// };

// let mousehover = document.querySelector("div");

// mousehover.onmouseover = (ent) => {
//   //   alert("hober");
//   mousehover.innerText = "worked";

//   console.log(ent.target);
// };

// let modebtn = document.querySelector("#mode");
// let currmode = "light";
// let body = document.querySelector("body");

// modebtn.addEventListener("click", () => {
//   if (currmode == "light") {
//     currmode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     currmode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
// });

// let div = document.querySelector("div");

// div.onmouseover = () => {
//   if (currmode == "light") {
//     currmode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     currmode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
// };

// practice rock  paper scissors

/* 1. */

// let sara = 25;
// let bought = 15;

// console.log("total = ", sara + bought);

// // 2.
// let jon = 500;
// let cost = 200;
// console.log("jon total taka :", jon - cost);

// // 3.

// let houre = 120;

// let eight = 120 * 8;

// console.log("total vehical =", eight);

// // 4.

// let perRow = 12;

// let totalRow = 8;
// let totaltree = 12 * 8;

// console.log("total tree =", totaltree);

// // 5.

// let perbox = 10;
// let totalbox = 5;

// let totalOrange = 10 * 5;

// let giveus = totalOrange - 12;
// console.log("total orange =", giveus);

// 6.

// let totalK_l = 150;
// let Hour = 3;

// let perHoure = totalK_l / houre;

// console.log("Trean per houre =", perHoure);

// // 7.

// let vehical = 6;
// let production = 200;

// let pervehical = 200 / 6;

// let twovehical = pervehical * 2;

// let totalproduct = production + twovehical;

// console.log("total product =", totalproduct);

// // 8.

// let buy = 120;
// let percartun = 9;

// let remaning = buy % percartun;

// console.log("Total Remaning = ", remaning);

// let arr = [23, 77, 80, 90, 20, 30, 40];

// let splice = arr.splice(1, 3);

// console.log(splice);

// console.log(arr);

// let button = document.querySelector("button");

// function sleep(nam, time) {
//   console.log("hi i am  " + nam, time + "this is my sleeping time");
// }

// function toCelsius(fahrenheit) {
//   return (5 / 9) * (fahrenheit - 32);
// }

// console.log();
// sleep("habibulla", "10 pm ");

// console.log("The Temperature is " + toCelsius(77));

// const car = {
//   name: "bmw",
//   color: "white",
//   wheel: 4,
//   model: "50g9",
//   weight: 950 + " kg",

//   srart: function () {
//     console.log("hey i start the car");

//     code = this.model + " " + this.name;

//     return code;
//   },
// };

// let code;

// let num = car.srart();
// console.log(num);
// console.log(car.weight);

// console.log(car["name"]);

// function doit() {
//   document.getElementById("doit").innerHTML = Date();
// }

// let text = "habibulla is  a good boy";

// let length = text.length;

// console.log(length);
// console.log(text);

// let y = new String("habibulla");

// console.log(typeof y);

// let char = text.charAt(0);

// console.log(typeof char);

// let charcode = text.charCodeAt(5);
// console.log(charcode);

// const names = "sahinur";

// let letter = names.at(2);

// console.log(letter);

// let texts = names[4];

// console.log(texts);

// let part = text.slice(10, 16);
// console.log(part);
// console.log(text);

// let substring = text.substring(2, 12);
// console.log(substring);

// let substr = text.substr(10, 6);
// console.log(substr);
// console.log(text.substr(-9));

// let toupper = text.toUpperCase();

// console.log(toupper);

// let tolower = text.toLowerCase();
// console.log(tolower);

// let trim = text.trimEnd();

// console.log(trim);

// let padding = text.padStart(4, " ");

// console.log(text);

// let repeat = text.repeat(3);
// console.log(repeat);

// let text2 = "I love cats. Cats are very easy to love. Cats are very popular.";
// text2 = text2.replaceAll("Cats", "Dogs");
// text2 = text2.replaceAll("cats", "dogs");

// console.log(text2);

// let split = text2.split(" ");
// console.log(split);

// let length = array.length;

// let type = typeof [array];

// console.log(length);
// console.log(type);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let string = "12.89";

// let num = parseInt(string);

// console.log(num);

// let one = "hello";
// let two = "world";

// console.log(one + " " + two);

// let numr = "34.8738393983";

// let float = parseFloat(numr);

// let floats = float.toFixed(5);

// console.log(floats);

// let arrays = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 44, 55, 66, 77, 888, 99, 88, 999, 554,
// ];

// let strarray = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
// ];

// console.log(strarray[7]);

// console.log(strarray.indexOf("g"));

// console.log(arrays.indexOf(55));

// strarray.push("n");

// console.log(strarray);

// let spite = strarray.splice(-2, 2);

// console.log(spite);

// console.log(strarray);

// const index = text.endsWith("ssalla");
// console.log(index.length + " " + index);

// let letarature = `hey this is my text ${text} and clculation ${
//   ((a = 5 + 5), (b = a + 10))
// }`;
// console.log(letarature);

// let fastfood = ["habib", "tamim", "sakib", "korim"];
// alert(fastfoot[3]);
// console.log(fastfoot[3]);
// // console.log(fastfoods[fastfoot.length]);

// console.log(fastfoot[fastfoot.indexOf("korim")]);

// let size = fastfood.length;
// let toString = fastfood.toLocaleString();

// console.log(toString);

// let atfunc = fastfood.at(2);

// console.log(atfunc);

// console.log(fastfood[2]);

// fastfood.unshift("yaumul");

// fastfood.shift();

// fastfood.shift();

// console.log(fastfood);
// let text = "habibulla ,banana ,kiwi ,lla, talla ,ssalla";
// let fastfood = ["habib", "tamim", "sakib", "karin"];
// let food = ["monir", "johir", "kabir", "anas"];
// console.log(fastfood);

// // delete fastfood[fastfood.length - 1];

// let concat = food.concat(fastfood);

// console.log(concat);

// console.log(fastfood);

// concat.copyWithin(5, 1, 3);

// console.log(concat);

// fastfood.splice(2, 0, "habu", "tamu");

// console.log(fastfood);

// let slice = fastfood.slice(1, 3);
// console.log(slice);

// let text = "habibulla ,banana ,kiwi ,lla, talla ,ssalla";
// let fastfood = ["habib", "tamim", "sakib", "karin"];
// let food = ["monir", "johir", "kabir", "anas"];

// fastfood.reverse();
// console.log(fastfood);

// let short = food.tosorted();
// console.log(short);

// let num = [1, 3, 2, 30, 5, 8];

// num.sort(function (a, b) {
//   return b - a;
// });
// console.log(num);

// for (let i = num.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i + 1));
//   let k = num[i];
//   num[i] = num[j];
//   num[j] = k;
// }

// console.log(num);

// let cars = [
//   { type: "volvo", year: 2220 },

//   { type: "saab", year: 2020 },
//   { type: "tesla", year: 3220 },
//   { type: "labor", year: 2024 },
// ];

// cars.sort(function (a, b) {
//   return a.year - b.year;
// });
// console.log(cars);

// let cars2 = [
//   { type: "korea", year: 2024 },

//   { type: "japan", year: 2020 },
//   { type: "garman", year: 3220 },
//   { type: "china", year: 2220 },
// ];

// cars2.sort(function (a, b) {
//   let x = a.type.toLowerCase();
//   let y = b.type.toLowerCase();
//   if (x < y) {
//     return -1;
//   }
//   if (x > y) {
//     return 1;
//   }
//   // if (a < b) {
//   //   return -1;
//   // }
//   // if (a > b) {
//   //   return 1;
//   // }
//   return 0;
// });

// console.log(cars2);

// let c = 5;

// let d = 7;

// if (c < d) {
//   console.log("kdkdikejd");
// }

// if (c > d) {
//   console.log("habib");
// }

// let num = [1, 3, 2, 30, 5, 8];

// let txt = "";

// num.map(myfunction);

// document.getElementById("text").innerHTML = txt;

// function myfunction(valu, index, arr) {
//   console.log(index);
//   console.log(valu);
//   console.log(arr);

//   return (txt += valu * 2 + " <br>");
// }

// console.log(typeof num);

// let newnum = num.flatMap((x) => [x * 10]);

// document.getElementById("text").innerHTML = newnum;

// let filters = num.filter(myfunction);

// function myfunction(valu, index, arr) {
//   if (valu > 5) {
//     return console.log("hi");
//   }
//   return console.log(index);
// }

// let sum = num.reduce(myfunction);

// function myfunction(total, valu, index, arr) {
//   return total + valu;
// }

// console.log(sum);

// let fint = num.find(myfunction2);

// function myfunction2(valu, index, arr) {
//   return valu > 5;
// }
// console.log(fint);

// const person = ["habu", "hab", "hau", "abu", "sabu", "bu"];

// for (let x in person) {
//   console.log(x + ":" + person[x]);

// }

// person.reverse();

// for (let x in person) {
//   console.log(x);
// }
// let i = 0;
// let text = "";
// while (i < 10) {
//   text += "the number is " + i + "\n";
//   i++;
// }
// console.log(text);
// console.log(typeof text);

// Create a Set
// const letters = new Set();
// letters.add("a");
// console.log(letters);
// const myset = new Set();
// myset.add("habib");
// myset.add("tamim");

// console.log(myset);
// mysets = myset.values();
// let text = " ";
// mysets.forEach(function (value) {
//   text += value + "\n";
// });

// console.log(text);

// let mymap = new Map();

// mymap.set("apples", 5000);
// mymap.set("bananas", 300);
// mymap.set("orange", 500);

// console.log(mymap);
// mymap.delete("bananas");
// mymap.clear();
// console.log(mymap.get("bananas"));
// console.log(mymap);

// let text = "";

// mymap.forEach(function (value, key) {
//   text += key + " =" + value + "\n";
//   console.log("the vlau" + value);
// });

// console.log(text);

// console.log(parseFloat("3.33"));

// console.log(parseInt("3.33"));

// let y = "5";
// let x = +y;
// console.log(typeof x);

// let x = 123;

// console.log(String(x));

// let y = 333;
// y.toString();

// console.log(y);

// let z = 554.553343;
// // z.toFixed();

// z.toPrecision(2);

// console.log(z);

// my();
// function my() {
//   var x = 50;
// }
// console.log(x);

// ("use strict");

// s = 3
// const person = {
//   firstName: "habib",
//   lastName: "islam",
//   id: 5533,
//   fullname: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   getfullname: function () {
//     return this.fullname();
//   },
// };

// const person1 = {
//   fullname: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const person2 = {
//   firstName: "habibulla",
//   lastName: "islam",
// };

// console.log(person1.fullname.bind(person2));

// let arry = [1, 3, 2, 10, 3, 4];

// console.log(Math.max.apply(" ", arry));

// hello = () => {
//   document.getElementById("text").innerHTML += this;
// };

// window.addEventListener("load", hello);

// document.getElementById("doit").addEventListener("click", hello);

// class friendlist {
//   constructor(name, age, bhav) {
//     this.name = name;

//     this.age = age;
//     // this.bhav = bhav;
//   }

//   type(bhav, name) {
//     name = this.name;
//     return `${name} ${(this.bhav = bhav)}`;
//   }
// }

// const fnd1 = new friendlist("tamim", 23);
// const fnd2 = new friendlist("rifu", 21, "good");

// console.log(fnd1.type("good"));

// let text =
//   '{"employees":[' +
//   '{"firstName":"John","lastName":"Doe" },' +
//   '{"firstName":"Anna","lastName":"Smith" },' +
//   '{"firstName":"Peter","lastName":"Jones" }]}';

// console.log(typeof text);

// let obj = JSON.parse(text);
// console.log(obj.employees[1].firstName);
// function habib(name, age, stutus) {
//   console.log(`name: ${name} age ${age} note:${stutus}`);
// }

// habib("habibulla", 21);

// const names =
//   "you like me habibulla islam habib i thikn habib isa beauty flower and habib is mean honesty that why my name is habibulla";

// const matchs = names.match(/habib/gi);
// const occurenes = matchs ? matchs.length : 0;
// console.log(occurenes);

// let position = names.search(/habib/i);
// position = position >= 0 ? position : "not found";
// console.log(position);

// function person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;

//   // FullName {
//   //   this.firstName + this.lastName;
//   // }
// }

// const myfather = new person("saifar", "mia", 52, "blue");
// const myMother = new person("halima", "begum", 42, "green");

// console.log(myMother.eyeColor);

// console.log(myfather.firstName);
// // console.log(FullName);

// person.prototype.nationality = "Bangladeshi";

// console.log(myMother);

// console.log(person.nationality);

// person.prototype.FullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// console.log(myMother.FullName());

// const person = {
//   firstName: "habib",
//   lastName: "islam",
//   age: 24,
// };

// const person2 = { firstName: "Anne", lastName: "Smith" };

// let x = Object.assign(person, person2);

// console.log(person);

// console.log(person2);

// console.log(x);

// const person = {
//   name: "habib",
//   age: function () {
//     return 30;
//   },
// };

// let mystring = JSON.stringify(person);

// document.getElementById("text").innerHTML = mystring;

// const person = {
//   name: "habib",
//   laguage: "english",
//   // age: "",
//   get lang() {
//     return this.laguage;
//   },
//   set ages(age) {
//     this.age = age;
//   },
// };

// console.log(person.lang);

// person.ages = 23;

// console.log(person.age);

// Object.defineProperty(person, "fullname", {
//   get: function (name, laguage) {
//     return this.name + " " + this.laguage;
//   },
// });

// console.log(person.fullname);

// function Person(first, last, age, gender) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.gender = gender;
//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// const habib = new Person("habib", "islam", 34, "man");
// const anas = new Person("anas", "islam", 21, "man");
// const yasin = new Person("yasin", "islam", 23, "man");

// const noon = new Person("adnin", "Noon", 24, "man");

// console.log(noon.fullName());

// Person.prototype.nationality = "bangla";

// yasin.have = "good skill";
// habib.have = " not a good skill :please practice more ";

// console.log(habib.nationality);

// console.log(`${yasin.fullName()}: ${yasin.nationality}`);
// console.log(yasin.have);

// console.log(habib.have);

// let arr = [1, 2, 3];
// let x = arr[Symbol.iterator]();

// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());

// let y = {
//   one: 1,
//   two: 2,
//   three: 3,
// };
// const myNumber = {};
// myNumber[Symbol.iterator] = function () {
//   let n = 0;
//   let done = false;
//   return {
//     next() {
//       n += 10;
//       if (n == 100) {
//         done = true;
//       }
//       return {
//         value: n,
//         done: done,
//       };
//     },
//   };
// };

// for (let n of myNumber) {
//   console.log(n);
// }

// function bank() {
//   console.log("dkfd");
// }

// bank.animal = "dkkfd";

// const person = {
//   name: "habib",
//   laguage: "english",
//   age: "",
// };
// person.name = function () {
//   return this.name + " " + this.laguage;
// };

// console.log(person.name());

// let c = {
//   bet: "hey",
// };

// let d;
// d = c;
// c.bet = "seai";

// console.log(d.bet);

// const fruits = new Map([
//   ["apple", 500],
//   ["bannanas", 300],
//   ["oranges", 200],
// ]);

// console.log(fruits);
// console.log(fruits.get("apple"));
// fruits.set("mango", 1000);

// console.log(fruits.get("mango"));

// console.log(fruits);

// console.log(fruits instanceof Map);

// function myfunction(a, b) {
//   return a * b;
// }

// console.log(myfunction(4, 5));

// let x = function (a, b) {
//   return a + b;
// };
// let z = x(4, 9);
// console.log(z);

// (function () {
//   console.log("i will invoke myself");
// })();

// function call(a, b) {
//   console.log(arguments.length);

//   return a - b;
// }
// let v = call(10, 50) * 3;

// console.log(v);

// const b = (x, y) => {
//   console.log(x / y);
//   return x % y;
// };

// console.log(b(40, 90));

//

// function sums(...args) {
//   let sum = 0;
//   for (let arg of args) {
//     // console.log(arguments[arg]);
//     sum += arg;
//   }
//   return sum;
// }
// let x = sums(2, 3, 4, 5, 2, 7, 12, 9, 44);
// console.log(x);

// function call(x, y) {
//   x = x * 2;
//   return x * y;
// }

// let v = 5;
// let n = 8;

// console.log(call(v, n));

// console.log(v);

// function call2(x) {
//   x.one = 34;
//   x.tow = 30;

//   return x.one - x.tow;
// }

// let obj = {
//   one: 12,
//   tow: 10,
// };

// console.log(call2(obj));
// console.log(obj.one, obj.tow);

// call function

// const person = {
//   fullName: function (city, cuntry) {
//     return this.firstName + " " + this.lastName + " " + city + " ," + cuntry;
//   },
// };

// const person1 = {
//   firstName: "johan",
//   lastName: "islam",
// };

// const person2 = {
//   firstName: "jakir",
//   lastName: "islam",
// };

// console.log(person.fullName.call(person1, "dhaka", "Bangladesh"));

// const person = {
//   fullName: function (city, cuntry) {
//     return this.firstName + " " + this.lastName + " " + city + " ," + cuntry;
//   },
// };

// const person1 = {
//   firstName: "johan",
//   lastName: "islam",
// };

// const person2 = {
//   firstName: "jakir",
//   lastName: "islam",
// };

// console.log(person.fullName.apply(person1, ["dhaka", "Bangladesh"]));

// let x = [1, 4, 29, 9, 2, 5, 6];

// let y = Math.max.apply(x, x);

// console.log(y);

// let x = {
//   name: "habib",
// };

// x.age = 23;

// console.log(x);

// class car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   method() {
//     console.log(this.name + " " + this.year);
//   }
//   static test() {
//     console.log("hello World");
//   }
// }

// class inher extends car {
//   constructor(name, year, mod) {
//     super(name, year);
//     // super(year);
//     this.model = mod;
//   }
//   show() {
//     return this.method() + ", this is inheritanc" + this.model;
//   }
// }
// let car1 = new inher("ford", 2022, "h209");
// let car2 = new inher("Audi", 2020, "m3n9");

// console.log(typeof car);

// car1.method();
// console.log(car2.show);

// car.test();

let paymentSuccess = true;
let marks = 80;

function enroll(callback) {
  console.log("Course enrollment is in progress ...");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("payment failed !");
    }
  }, 2000);
}

function progress(callback) {
  console.log("course on progress...");

  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("you could not get Enough marks to get the certificate");
    }
  }, 2000);
}

function getCertificate() {
  console.log("preparing your certificate :");

  setTimeout(function () {
    console.log("Congratulation for your achivment: ");
  }, 2000);
}

enroll(function () {
  progress(getCertificate);
});
