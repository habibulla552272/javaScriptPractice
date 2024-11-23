// const myjson = `{'name':'habib','age':21,'car':null}`;

// console.log(typeof myjson);

// const myObj = JSON.parse(myjson);

// const myObj = { name: "John", age: 31, city: "NewYork" };

// console.log(myObj);

// let strigyfiy = JSON.stringify(myObj);

// console.log(strigyfiy

// async function fetchData(params) {
//   const response = await fetch("Text.txt");
//   const data = await response.json();
//     console.log(data.pets[2]);
//   let pets = data.pets;

//   for (let i of pets) {
//     console.log(i.name,i.animal);
//   }


// }

// fetchData();

async function change_myselect(sel) {
    let x= ''
    let dbparam = JSON.stringify({table:sel,limit:20});

    const response = await fetch("json_demo_html_table.php", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body:'x='+dbparam,
    });
    let myobj =await response.json();

    text = "<table border='1'>";

    for(x in myobj){
        text+="<tr><td>"+myobj[x].name+'</td></tr>';
    }
    text+="</table>";
    document.getElementById('demo').innerHTML=text;
}