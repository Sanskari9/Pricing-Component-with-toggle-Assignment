const button = document.getElementById("selector-bar");
button.addEventListener('click', togglePayment);

function togglePayment() {
  var monthPayment = document.getElementsByTagName("h3");
  var yearPayment = document.getElementsByTagName("h4");

  for (var i = 0; i < monthPayment.length; i++) {
    if (monthPayment[i].style.display === "none") {
      monthPayment[i].style.display = "block";
      yearPayment[i].style.display = "none";
      button.style.justifyContent = "flex-end";
    } else {
      monthPayment[i].style.display = "none";
      yearPayment[i].style.display = "block";
      button.style.justifyContent = "flex-start";
    }
  }
}
