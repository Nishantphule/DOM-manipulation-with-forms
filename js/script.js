"use strict"
const tableBox = document.createElement("table")
tableBox.classList = "table table-bordered table-sm"
const table = document.querySelector(".table")
table.appendChild(tableBox)

const tableHead = document.createElement("thead")
tableBox.appendChild(tableHead)

const headRow = document.createElement("tr")
tableHead.appendChild(headRow)

let headArr = ["First Name", "Last Name", "Address", "Pincode", "Gender", "Food", "State", "Country"]
headArr.forEach(element => {
  const headTitle = document.createElement("th")
  headTitle.innerText = element
  headRow.append(headTitle)
});

const tableBody = document.createElement("tbody")
tableBody.id = "data"
tableBox.appendChild(tableBody)


// creating a function for button submit 
// when u click on submit button it will collect the data
// getting element and storing in table
document.getElementById("submit").addEventListener("click", function nishant() {
  let fnameo = document.getElementById("first-name").value;
  let lnameo = document.getElementById("last-name").value;
  let addresso = document.getElementById("address").value;
  let pincodeo = document.getElementById("pincode").value;
  let gendero = document.getElementsByName("gender");

  // to get the select radio button value
  if (gendero[0].checked) {
    gendero = gendero.value = "MALE"
  }
  else if (gendero[1].checked) {
    gendero = gendero.value = "FEMALE"
  }
  else if (gendero[2].checked) {
    gendero = gendero.value = "OTHER"
  }
  else {
    gendero = gendero.value = "Not selected"
  }

  let food1o = document.getElementById("food1").value;
  let food2o = document.getElementById("food2").value;
  let stateo = document.getElementById("state").value;
  let countryo = document.getElementById("country").value;

  const data = {
    fname: fnameo,
    lname: lnameo,
    address: addresso,
    pincode: pincodeo,
    gender: gendero,
    food: food1o + "<br>" + food2o,
    state: stateo,
    country: countryo
  }

  let dataTable = "";
  dataTable += "<tr>";
  dataTable += "<td>" + data.fname + "</td>";
  dataTable += "<td>" + data.lname + "</td>";
  dataTable += "<td>" + data.address + "</td>";
  dataTable += "<td>" + data.pincode + "</td>";
  dataTable += "<td>" + data.gender + "</td>";
  dataTable += "<td>" + data.food + "</td>";
  dataTable += "<td>" + data.state + "</td>";
  dataTable += "<td>" + data.country + "</td>";
  document.getElementById('data').innerHTML += dataTable;
  form.reset()
}
)



  
