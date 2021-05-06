var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];


modal.style.display = "block";

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

onClick();

function onClick() {
    var fact = document.getElementById('fact');
    fact.innerHTML = grabFact();
}