window.onload = function () {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  if (data) {
    let tableBody = document.getElementById("tableBody");

    data.forEach((entry) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `<td>${entry.date}</td><td>${entry.input}</td>`;
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