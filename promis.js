// let paymentSuccess = true;
// let mark = 90;

// function enroll() {
//   console.log("Course enrollment is in progress ...");

//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (paymentSuccess) {
//         resolve();
//       } else {
//         reject("payment failed");
//       }
//     }, 2000);
//   });
//   return promise;
// }

// function progress() {
//   console.log("course on progress...");

//   const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (mark >= 80) {
//         resolve();
//       } else {
//         reject("you could not get Enough marks to get the certificate");
//       }
//     }, 2000);
//   });
//   return promise;
// }

// function getCertificate() {
//   console.log("preparing your certificate :");

//   const promise = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("Congratulation for your achivment: ");
//     }, 2000);
//   });
//   return promise;
// }

// async function course() {
//   try {
//     await enroll();
//     await progress();
//     const message = await getCertificate();

//     console.log(message);
//   } catch (err) {
//     console.log(err);
//   }
// }
// course();

// // enroll()
// //   .then(progress)
// //   .then(getCertificate)
// //   .then(function (value) {
// //     console.log(value);
// //   })
// //   .catch(function (err) {
// //     console.log(err);
// //   });

// // function promise(nam) {
// //   let promise = new Promise(function (resolve, reject) {
// //     if(nam==String){
// //       resolve('string')
// //     }else{
// //       reject('nat a string')
// //     }
// //   });
// //   return promise;
// // }

// // function number(num) {
// //   let promise = new Promise(function (resolve, reject) {
// //     if (num === Number) {
// //       resolve("this is number");
// //     } else reject("this is not a number:");
// //   });
// //   return promise;
// // }

// // promise("habi")
// //   .then(function (val) {
// //     console.log(val);
// //   })
// //   .catch(function (err) {
// //     console.log(err);
// //   });

function display(some) {
  document.getElementById("demo").innerHTML = some;
}

function calculator(){

  let x=6;
  let y=9;

  let sum =x-y;
  return sum;
}

let mypromise = new Promise(function (reject, resolve) {
  let x = 1;

  if (x == 0) {

   let cal=  calculator()
    resolve(cal);
  } else {
    reject("error");
  }
});

// mypromise.then(function(value){
//   display(value);}).catch(function(err){
//     display(err)
//   })
// },function(error){
//   display(error)
// })

async function test(params) {

  try{

    let x = await mypromise;
    display(x)
  }catch(err){
    display(err);
  }
  
}

test()