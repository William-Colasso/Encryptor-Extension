window.onload = function() {
  let data = JSON.parse(localStorage.getItem('userData'));
  
  if (data) {
      let tableBody = document.getElementById('tableBody');
      let newRow = document.createElement('tr');


      let dateCell = document.createElement('td');
      dateCell.innerText = data.date;
      newRow.appendChild(dateCell);
      
      let inputCell = document.createElement('td');
      inputCell.innerText = data.userInput;
      newRow.appendChild(inputCell);

      
      

      tableBody.appendChild(newRow);
  }
};
