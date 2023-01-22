let arr = [
  { id: 1, fname: "Ram", lname: "Kumar", city: "New Delhi", country: "India" },
  {
    id: 2,
    fname: "Lakshman",
    lname: "Singh",
    city: "Lucknow",
    country: "India",
  },
  {
    id: 3,
    fname: "Bharat",
    lname: "Yadav",
    city: "Chennai",
    country: "India",
  },
  {
    id: 4,
    fname: "Shatrughan",
    lname: "Bisht",
    city: "Meerut",
    country: "India",
  },
];

let tbody = document.getElementById("tbody");
let rowBottom = document.getElementById("rowBottom");
let rowTop = document.getElementById("rowTop");
let iFName = document.getElementById("iFName");
let iLName = document.getElementById("iLName");
let iCity = document.getElementById("iCity");
let iCountry = document.getElementById("iCountry");

rowBottom.addEventListener("click", addRowAtBottom);
rowTop.addEventListener("click", addRowAtTop);

function loadData() {
  arr.map((e, i) => {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${i + 1}</td>
            <td>${e.fname}</td>
            <td>${e.lname}</td>
            <td>${e.city}</td>
            <td>${e.country}</td>
        `;
    tbody.append(row);
  });
}

loadData();

function addRowAtBottom() {
  tbody.innerHTML = "";
  arr.push({
    fname: iFName.value,
    lname: iLName.value,
    city: iCity.value,
    country: iCountry.value,
  });
 
  console.log(arr);
  loadData();
  iFName.innerHTML = "";
  iLName.innerHTML = "";
}

function addRowAtTop() {
  tbody.innerHTML = "";
  arr.unshift({
    fname: iFName.value,
    lname: iLName.value,
    city: iCity.value,
    country: iCountry.value,
  });
  console.log(arr);
  loadData();
}
