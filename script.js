console.log("script loaded");

const board = document.getElementById("board");

function addTableRow() {
  console.log("addTableRow");
  const row = document.createElement("tr");

  for (let i = 0; i < 4; i++) {
    const data = document.createElement("td");
    //   data.innerHTML = `${i}`;
    const square = document.createElement("div");
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
    newOption.style = "background-color: red";
    newOption.innerHTML = `${i}`;
    dropdown.appendChild(newOption);
  }
}
populateDropdown("1");
populateDropdown("2");
populateDropdown("3");
populateDropdown("4");
