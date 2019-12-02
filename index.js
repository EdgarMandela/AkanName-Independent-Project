function myFunction() {
    alert("I am an alert box!");
  }
  function validateDate() {
    var date = document.getElementById("date").value;
    if ((date <= 0) || (date > 31)) {
      alert("invalid date ! please enter number between 1 - 31");
    }
}
var month = document.getElementById("month").value;
if ((month <= 0) || (month > 12)) {
  alert("invalid Month ! please enter number between 1 - 12");
}
}

  