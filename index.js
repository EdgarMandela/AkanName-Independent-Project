function myFunction() {
    alert("I am an alert box!");
  }
  function validateDate() {
    var date = document.getElementById("date").value;
    if ((date <= 0) || (date > 31)) {
      alert("invalid date ! please enter number between 1 - 31");
    }
  