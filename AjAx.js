// let text = document.getElementById("text");
// let xhr;
// function LoadAjax() {
//   xhr = new XMLHttpRequest();

//   xhr.onload = function () {
//     text.innerHTML = xhr.responseText;

//     console.log(this.getResponseHeader("last-modified"));

//     console.log("hey bro");
//   };

//   xhr.open("GET", "Text.txt", true);

//   xhr.send();

//   console.log("hello bro");
// }

// function learAjax() {
//   xhr.abort();

//   // xhr =''
// }

// ajax test
let getdata = document.querySelector("#get");

let postdata = document.querySelector("#post");

getdata.addEventListener("click", getData);
postdata.addEventListener("click", postData);

function sentRequest(method, url, Data) {
  const promise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (resolve >= 400) {
        reject(
          `ther was an application error and the response status is ${this.status} Problem`
        );
      } else {
        resolve(this.response);
      }
    };
    xhr.onerror = function () {
      reject("Your url not Founded");
    };

    xhr.open(method, url);

    xhr.responseText = "json";

    xhr.send(Data);
  });

  return promise;
}

function getData() {
  sentRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function postData() {
  sentRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    })
  )
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
}
