let section = document.createElement("section");
let toph = document.createElement("h1");
let div1 = document.createElement("div");
let div = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
document.body.appendChild(section);
toph.textContent = "WellCome to JS DOM";
section.appendChild(toph);
section.appendChild(div);
div.appendChild(div1);
div.appendChild(div2);
div.appendChild(div3);

// let h1 = document.createElement("h1");
// // h1 = document.createTextNode("this is Book List");
// // h1.textContent = "this is Book List";
// h1.innerHTML = `This is book list`;

// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// // li1 = document.createTextNode("book 1");
// li1.textContent = "book list1";
// let li2 = document.createElement("li");
// li2.textContent = "book list2";
// // li2 = document.createTextNode("book list 2");

// let li3 = document.createElement("li");
// li3.textContent = "book list3";
// // li3 = document.createTextNode("book list 3");

// let li4 = document.createElement("li");
// // li4 = document.createTextNode("book list 4");
// li4.textContent = "book list4";

// div1.appendChild(h1);

// div1.appendChild(ul);
// ul.appendChild(li1);

// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);

// div1.style.border = "2px solid black";
// div1.style.width = "300px";
// div1.style.padding = "0px 0 0 10px";

// h1.style.color = "red";

// div.classList.add("div1");

function addNode(name, num, divName) {
  let h = document.createElement("h1");
  h.innerHTML = `This is ${name} List`;
  divName.appendChild(h);
  let ul = document.createElement("ul");
  divName.appendChild(ul);
  h.style.color = "green";

  for (let i = 1; i < num; i++) {
    let li = document.createElement("li");
    li.textContent = `${name} list ${i}`;
    ul.appendChild(li);
  }

  divName.style.width = "300px";
  divName.style.border = "2px solid black";
  divName.style.padding = "0px 0 0 10px";

  //    let li1 = document.createElement("li");
  //    li1.textContent ='book list 1'

  //   let li2 = document.createElement("li");
  //   li2 = document.createTextNode("book list 1");
}

// div 1
let name = "book";
let divName = div1;
addNode(name, 5, divName);

// div2
let pe = "peace";
let divName2 = div2;
addNode(pe, 5, divName2);

//div 3

let friend = "Friend";
let divName3 = div3;
addNode(friend, 5, divName3);

div.classList.add("firstDiv");

let firstdiv = document.querySelector(".firstDiv");

firstdiv.style.display = "flex";
firstdiv.style.justifyContent = "space-between";
firstdiv.style.alignItem = "center";

toph.classList.add("tophtag");
let tophTag = document.querySelector(".tophtag");

tophTag.style.background = "red";
tophTag.style.width = "80%";
tophTag.style.margin = "20px auto ";

// toph.style.background ='red'
