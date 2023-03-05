console.log("script loaded");

const board = document.getElementById("board");
const colorSets = ["red", "green", "blue", "pink"];
populateDropdown("1");
populateDropdown("2");
populateDropdown("3");
populateDropdown("4");

const dd1 = document.getElementById("color-input-1");
const dd2 = document.getElementById("color-input-2");
const dd3 = document.getElementById("color-input-3");
const dd4 = document.getElementById("color-input-4");

const elements = [dd1, dd2, dd3, dd4];

function addTableRow() {
  console.log("addTableRow");
  const row = document.createElement("tr");

  for (let i = 0; i < 4; i++) {
    const data = document.createElement("td");
    const square = document.createElement("div");
    // square.innerHTML = `${elements?.[i].value ?? "-"}`;
    square.style = `background-color: ${elements?.[i].value ?? "none"}`;
    square.className = "square";
    data.appendChild(square);
    row.appendChild(data);
  }
  board.appendChild(row);
}

function populateDropdown(index) {
  const dropdown = document.getElementById(`color-input-${index}`);
  for (let i = 0; i < 4; i++) {
    const newOption = document.createElement("option");
    newOption.innerHTML = colorSets?.[i];
    newOption.value = colorSets?.[i];
    dropdown.appendChild(newOption);
  }
}
