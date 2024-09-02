window.onload = function () {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  if (data) {
    let tableBody = document.getElementById("tableBody");

    data.forEach((entry) => {
      const newRow = document.createElement("tr");
      
      // Create date and input cells
      const dateCell = document.createElement("td");
      dateCell.textContent = entry.date;
      const inputCell = document.createElement("td");
      inputCell.textContent = entry.input;

      // Create the copy button
      const buttonCell = document.createElement("td");
      const buttonCopy = document.createElement("button");
      buttonCopy.setAttribute('class','copiators')
      buttonCopy.textContent = "Copy";
      
      buttonCopy.addEventListener("click", () => {
        try {
          navigator.clipboard.writeText(entry.input); // Copy the input value
          buttonCopy.innerText = "Copied!";
          buttonCopy.style.color = "white";

          setTimeout(() => {
            buttonCopy.innerText = "Copy";
            buttonCopy.style.color = "#12a525";
          }, 1000);
        } catch (err) {
          console.error("Copying Error" + err);
        }
      });

      buttonCell.appendChild(buttonCopy);

      // Append all cells to the row
      newRow.appendChild(dateCell);
      newRow.appendChild(inputCell);
      newRow.appendChild(buttonCell);

      // Append the row to the table body
      tableBody.appendChild(newRow);
    });
  }
};

function clearTable() {
  // Limpar tabela na página
  const tableBody = document.querySelector('#dataTable tbody');
  tableBody.innerHTML = '';

  // Limpar dados do localStorage
  localStorage.removeItem('data');
}