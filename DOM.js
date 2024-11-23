// const pra = document.createElement("p");

// const node = document.createTextNode("Hello Worls");

// pra.appendChild(node);
// let x = document.getElementById("id01");

// document.body.insertBefore(pra, x);

// let y = document.getElementById("rev");

// console.log(x.childNodes);

// y.remove();

// let news = document.createElement("p");
// let node2 = document.createTextNode(
//   " rovident voluptatum reiciendis dolor illum? Veniam, totam."
// );

// news.appendChild(node2);

// document.body.replaceChild(news, x);

// console.dir(document.getElementsByTagName("p"));
// let htmlcollection = document.getElementsByClassName("hello");
// let nodelist = document.querySelectorAll(".hello");

// console.dir(nodelist);
// console.dir(htmlcollection);

// console.log(htmlcollection['rev']);

// console.log(nodelist['rev']);

// let width = document.getElementById("width");
// let height = document.getElementById("height");

// width.innerHTML = "windows inner width is:  " + window.innerWidth;
// height.innerHTML = "windows inner height is : " + window.innerHeight;

// let mywindo;
// function openwindo() {
//   mywindo = window.open("https://www.youtube.com/");
// }

// function closewindow() {
//   mywindo.close();
// }

// let width = document.getElementById("width");
// let height = document.getElementById("height");

// let availwidth = document.getElementById("availwidth");
// let availheight = document.getElementById("availheight");
// let colordepth = document.getElementById("colordepth");
// let pixeldepth = document.getElementById("pixeldepth");

// width.innerHTML = "screen width is :" + screen.width;
// height.innerHTML = "screen heitht is :" + screen.height;
// availwidth.innerHTML = "screen availwidth is :" + screen.availWidth;
// availheight.innerHTML = "screen availheight is :" + screen.availHeight;
// colordepth.innerHTML = "screen colordepth is :" + screen.colorDepth;
// pixeldepth.innerHTML = "screen pixeldepth is :" + screen.pixelDepth;

// let href = document.getElementById("href");
// let hostname = document.getElementById("hostname");

// let pathname = document.getElementById("pathname");
// let protocol = document.getElementById("protocol");
// let assign = document.getElementById("assign");

// href.innerHTML = "window href is :" + window.location.href;
// hostname.innerHTML = "window hostname is :" + window.location.hostname;
// pathname.innerHTML = "window pathname is :" + window.location.pathname;
// protocol.innerHTML = "window portocol is :" + window.location.protocol;
// // assign.innerHTML = "window assign is :" + window.location.assign;

// function newDoc() {
//   window.location.assign("https://www.w3schools.com");
// }

// function goback() {
//   console.log("hello");
//   window.history.back();
// }

// function Forword() {
//   console.log("hello to");
//   window.history.forward();
// }

// document.getElementById("appname").innerHTML =
//   "navigator version " + navigator.appName;

// document.getElementById("appcodename").innerHTML =
//   "navigator version " + navigator.appCodeName;

// document.getElementById("product").innerHTML =
//   "navigator version " + navigator.product;
// document.getElementById("appname").innerHTML =
//   "navigator version " + navigator.appVersion;

// let text = document.querySelector("#text");

// function showconfirm() {
//   if (window.confirm("press a button")) {
//     text.innerHTML = "you click ok";
//   } else {
//     text.innerHTML = "you click cancel";
//   }
// }

// function showprompt() {
//   let x = window.prompt("text here");

//   if (x === null || x === "") {
//     text.innerHTML = "you do not write any text";
//   } else {
//     text.innerHTML = "Thank you for your opinion";
//   }
// }

// let text2 = document.querySelector("#text2");
// let text3 = document.querySelector("#text3");
// let text4 = document.querySelector("#text4");
// let x;
// function showtimeout() {
//   console.log("hello");

//   x = window.setTimeout(function () {
//     text.innerHTML = "2 second over";
//   }, 2000);
// }

// function showclerout() {
//   clearTimeout(x);
//   text2.innerHTML = "successfuly clear timeout";
// }

// function showinterval() {
//   x = setInterval(function () {
//     text3.innerHTML = new Date().toLocaleTimeString();
//   }, 1000);
// }

// function showclearinterval() {
//   clearInterval(x);
// }
// let text = document.querySelector("#text");
// let text2 = document.querySelector("#text2");
// let mydate = new Date();

// text2.innerHTML = mydate.toTimeString();

// let x = mydate.setTime(mydate.getMinutes());

// text.innerHTML = x;

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getDate() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires" + d.toUTCString();

//   document.cookie = cname + "=" + cvalue + ";" + expires;
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);

//   let ca = decodedCookie.split(";");

//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   let username = getCookie("username");
//   if (username != "") {
//     alert("Wellcome again" + username);
//   } else {
//     username = prompt("please enter your name :", "");
//   }
//   if (username != "" && username != null) {
//     setCookie("username", username, 2);
//   }
// }

// function validation() {
//   let inputobj = document.getElementById("id1");

//   if (inputobj.validity.rangeOverflow) {
//     inputobj.setCustomValidity("you have made a range overflow");
//   } else if (inputobj.validity.rangeUnderflow) {
//     inputobj.setCustomValidity("your data range underflow");
//   } else if (inputobj.validity.valueMissing) {
//     inputobj.setCustomValidity("your data is missing");
//   }
//   if (!inputobj.checkValidity()) {
//     document.getElementById("text").innerHTML = inputobj.validationMessage;
//   }
// }

// function back() {
//   window.history.back();
// }
// function forward() {
//   window.history.forward();
// }

// function backto() {
//   window.history.go(-2);
// }

// function lastpage() {
//   window.history.go(2);
// }

// function showurl() {
//   let text = document.getElementById("text");

//   text.innerHTML = history.length;
// }

// function localset(name, valu) {
//   localStorage.setItem(name, valu);
// }

// function getlocal(name) {
//   alert(localStorage.getItem(name));
// }

// function getusername(key) {
//   alert(localStorage.getItem(key));
// }

// function removeitem(key) {
//   localStorage.removeItem(key);
// }

// function clearitem() {
//   localStorage.clear();
// }

document.getElementById("submit").addEventListener("click", () => {
  let addBox = document.getElementById("addBox");
  let textvalue = document.getElementById("newtext");
  let newtextvalue = textvalue.value;
  let p = document.createElement("p");
  p.innerHTML = newtextvalue;

  addBox.appendChild(p);

  textvalue.value = "";
});
