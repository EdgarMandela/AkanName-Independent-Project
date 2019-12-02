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

function validateCentuary() {
    var centuary = document.getElementById("Centuary").value;
    if ((centuary <= 0) || (centuary > 99)) {
      alert("invalid centuary ! please enter number between 1 - 99");
    }
  }

  function validateYear() {
    var year = document.getElementById("year").value;
    if ((year <= 0) || (year > 99)) {
      alert("invalid centuary ! please enter number between 1 - 99");
    }
  }
  

  function submitvalue() {
    var date = document.getElementById('date').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById("year").value;
    var century = document.getElementById("Centuary").value;
    var gender;
    var ele = document.getElementsByName('gender');
  
    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked)
        gender = ele[i].value;
   var dayOfTheWeek = (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
   var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
 

  
    }
  
  