var submit = document.getElementById("button");
document.addEventListener("DOMContentLoaded", () => {
    // Initialize counter if not set
    if (localStorage.getItem('counter') === null) {
      localStorage.setItem('counter', 0);
    }
})
submit.addEventListener("click", (e) => {
  var input = document.getElementById("output");
  var dates = new Date();
  let password;
  let date;
  if (
    input.value != undefined &&
    input.value != null &&
    input.value != NaN &&
    input.value != false &&
    input.value != ""
  ) {
    password = String (input.value);
    date =
      String(Number(dates.getMonth()) + 1) +
      "/" +
      String(dates.getDate()) +
      "/" +
      String(dates.getFullYear()) +
      "," +
      String(dates.getHours()) +
      ":" +
      String(dates.getMinutes()) +
      ":" +
      String(dates.getSeconds());
  } else {
    console.log("Invalid parameters");
    return;
  }

  var obj = {
    password,
    date
  };

  obj.password = password
  obj.date = date
  counter = localStorage.getItem("counter");
  localStorage.setItem(String(counter), JSON.stringify(obj));
  localStorage.setItem("counter", Number(counter) + 1);
  e.preventDefault();
});
