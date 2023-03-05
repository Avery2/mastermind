console.log("script loaded")

const board = document.getElementById("board")

function addChild() {
    console.log("addChild");
    const row = document.createElement("tr");

    for (let i = 0; i < 4; i++) {
      const data = document.createElement("td");
      //   data.innerHTML = `${i}`;
      data.innerHTML = ` `;
      row.appendChild(data);
    }
    board.appendChild(row);
}
