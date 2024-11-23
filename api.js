//worker start
//let w;
// function startWorker() {
//   if (typeof Worker !== "undefined") {
//     if (typeof w == "undefined") {
//       w = new Worker("Worker.js");
//     }

//     w.onmessage = function (event) {
//       console.log(event);

//       document.getElementById("text").innerHTML = event.data;
//     };
//   } else {
//     alert("your browser dose not support web worker: ");
//   }
// }
// function stopWorder() {
//   if (typeof Worker !== "undefined") {
//     w.terminate();
//     w = "undefined";
//   } else {
//     alert("hey boss do't work id ");
//   }
// }
//end worker

// let text = document.querySelector("#text");
//fetch start
// function fetchdata() {
//   fetch("http://127.0.0.1:5501/Text.txt")
//     .then((res) => res.text())
//     .then((data) => {
//       console.log("hello");
//       text.innerHTML = data;
//     });
//   console.log("hello");
// }

// async function fetchdata() {
//   const res = await fetch("http://127.0.0.1:5501/Text.txt");

//   let data = await res.text();

//   text.innerHTML = data;
// }
//fetch end

// location code
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition, showError);
//   } else {
//     text.innerHTML = "geolocation is not avilable in your browser :";
//   }
// }

// function showPosition(possition) {
//   text.innerHTML =
//     "Latitude:" +
//     possition.coords.latitude +
//     "<br>Longitude:" +
//     possition.coords.longitude;

//   //   console.log(possition);
// }

// function showError(error) {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       text.innerHTML = "User denied the request for Geolocation.";
//       break;
//     case error.POSITION_UNAVAILABLE:
//       text.innerHTML = "Location information is unavailable.";
//       break;
//   }
// }
//location code end

// let obj = {
//   name: "habibulla",
// };

// console.log(obj.name);

// document.getElementById("text").innerHTML = obj.name;

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.products.forEach((element) => {
      console.log(element);

      let div = document.getElementById("text");
      let newdiv = document.createElement("div");
      newdiv.innerHTML = ` <div class="card"> <img src="${element.thumbnail}" alt="img"> <div class="card-div">  <p class="titel">${element.title}</p>  <p class="price"> ${element.price}</p> <button class="btn">Buy It</button> </div>  </div>`;
      div.appendChild(newdiv);
    });
  });
