//problem 1 create a button that when clicked ,show alert button is clicked

let problem1 = document.getElementById("problem1");

problem1.addEventListener("click", () => {
  alert("Problem 1 Clicked");
});

//problem 2

let problem2 = document.getElementById("problem2");
let counter = 0;
problem2.addEventListener("click", () => {
  counter++;
  document.getElementById("count").innerHTML = `Count ${counter}`;
});

//problem 3

let toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  let problem3 = document.getElementById("problem3");

  if (problem3.style.display === "none") {
    problem3.style.display = "block";
    toggle.textContent = "Hidden";
  } else {
    problem3.style.display = "none";
    toggle.textContent = "Show text";
  }
});

//problem 4
let body = document.body;
body.style.backgroundColor = "white";
let problem4 = document.getElementById("problem4");

problem4.addEventListener("click", () => {
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
});
