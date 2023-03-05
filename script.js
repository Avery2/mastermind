console.log("script loaded");

const board = document.getElementById("board");
const numCol = 4;
// todo: update answer
let answers = ["red", "red", "red", "red"];
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
const dropdowns = [dd1, dd2, dd3, dd4];

const add1 = document.getElementById("color-input-a1");
const add2 = document.getElementById("color-input-a2");
const add3 = document.getElementById("color-input-a3");
const add4 = document.getElementById("color-input-a4");
const ans_dropdowns = [add1, add2, add3, add4];

populateDropdown("a1");
populateDropdown("a2");
populateDropdown("a3");
populateDropdown("a4");

function addTableRow(elements) {
  if (!elements || elements.length === 0) {
    elements = elements;
  }
  console.log("addTableRow", `${elements}`);
  const row = document.createElement("tr");

  for (let i = 0; i < numCol; i++) {
    const data = document.createElement("td");
    const square = document.createElement("div");
    square.style = `background-color: ${
      elements?.[i].value ?? elements?.[i] ?? "none"
    }`;
    square.className = "square";
    data.appendChild(square);
    row.appendChild(data);
  }

  // note
  // game logic
  const data = document.createElement("td");
  let redCount = 0;
  let whiteCount = 0;

  answers = ans_dropdowns.map((e) => e.value);

  if (elements) {
    for (let i = 0; i < numCol; i++) {
      if (elements?.[i] === answers?.[i]) {
        redCount++;
      } else if (answers.filter((e, j) => j > i).includes(elements?.[i])) {
        whiteCount++;
      }
    }
  }

  data.innerHTML = `${redCount} red ; ${whiteCount} white`;
  row.appendChild(data);

  // add to board
  board.appendChild(row);
}

function populateDropdown(index) {
  console.log(`color-input-${index}`);
  const dropdown = document.getElementById(`color-input-${index}`);
  for (let i = 0; i < numCol; i++) {
    const newOption = document.createElement("option");
    newOption.innerHTML = colorSets?.[i];
    newOption.value = colorSets?.[i];
    dropdown.appendChild(newOption);
  }
}

const maxNumRows = 10;

const positions = [];

function addTableRowData() {
  positions.push([]);
  for (let i = 0; i < numCol; i++) {
    positions?.[positions?.length - 1].push(dropdowns?.[i].value);
  }
  console.log("addTableRowData" + `${positions[positions.length - 1]}`);
  populateTable();
  console.log({ positions });
}

function showHideButton() {
  const answer = document.getElementById("answer-cont");
  if (answer.style.visibility === "hidden") {
    answer.style.visibility = "visible";
  } else {
    answer.style.visibility = "hidden";
  }
}

function populateTable() {
  // reset
  board.replaceChildren();
  const header = document.createElement("tr");
  for (let i = 0; i < numCol; i++) {
    const data = document.createElement("th");
    data.innerHTML = i;
    header.appendChild(data);
  }
  const data = document.createElement("th");
  data.innerHTML = "notes";
  header.appendChild(data);

  board.appendChild(header);
  for (let index = 0; index < maxNumRows; index++) {
    addTableRow(positions?.[index]);
  }

  answers = ans_dropdowns.map((e) => e.value);
}

populateTable();
