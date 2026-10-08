function saveData() {
localStorage.setItem("Förnamn", document.getElementById("Förnamn").value);
localStorage.setItem("Efternamn", document.getElementById("Efternamn").value);
localStorage.setItem("Email", document.getElementById("Email").value);
localStorage.setItem("Stad", document.getElementById("Stad").value);
localStorage.setItem("Födelsedatum", document.getElementById("date").value);

const kön = document.querySelector('input[name="kon"]:checked');
if (kön) {
  localStorage.setItem("Kön", kön.value);
}
}
function clearForm() {
    localStorage.clear();
  document.getElementById("Förnamn").value = "";
  document.getElementById("Efternamn").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Stad").value = "";
  document.getElementById("date").value = "";
  document.querySelector('input[name="kon"]:checked').checked = false;
}

function loadData() {
document.getElementById("Förnamn").value = localStorage.getItem("Förnamn") || "";
document.getElementById("Efternamn").value = localStorage.getItem("Efternamn") || "";
document.getElementById("Email").value = localStorage.getItem("Email") || "";
document.getElementById("Stad").value = localStorage.getItem("Stad") || "";
document.getElementById("date").value = localStorage.getItem("Födelsedatum") || "";

const savedKön = localStorage.getItem("Kön");
if (savedKön) {
  const könRadio = document.querySelector(`input[name="kon"][value="${savedKön}"]`);
  if (könRadio) {
    könRadio.checked = true;
  }
}
}
loadData();