var secretCode = "JOSUEISAGOAT";
var input = "";

document.addEventListener("keydown", function(event) {
  input += event.key.toUpperCase();
  if (input.endsWith(secretCode)) {
    alert("Tu es aussi un GOAT !");
    input = "";
  }
});