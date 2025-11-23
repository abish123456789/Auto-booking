document.getElementById("bookingForm").addEventListener("submit", function(event){
  event.preventDefault();

  let name = document.getElementById("name").value;
  let service = document.getElementById("service").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  document.getElementById("result").innerHTML =
    "Thank you, " + name + "!<br>Your " + service + 
    " is booked on " + date + " at " + time + ".";
});
