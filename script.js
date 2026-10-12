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


const savedName = localStorage.getItem("Förnamn");
const welcomeName = document.getElementById("welcomeName");
if (welcomeName && savedName) {
  welcomeName.textContent = `Välkommen, ${savedName}!`;
}
loadData();

const knapp = document.getElementById("profileBtn");
const profileForm = document.getElementById("profile");

knapp.addEventListener("click", (event) => {
  profileForm.hidden = false;
  dashboardSection.hidden = true;
});

const dashboardSection = document.getElementById("dashboard"); 
const dashboardBtn = document.getElementById("dashboardBtn");

dashboardBtn.addEventListener("click", (event) => {
  dashboardSection.hidden = false;
  profileForm.hidden = true; 
});


const update = document.getElementById("saveBtn")
const clear = document.getElementById("clearBtn")
const showProfileInfo = document.getElementById("show-profile")

function showProfile() {
  const firstName = document.getElementById("Förnamn").value;
  const lastName = document.getElementById("Efternamn").value;
  const email = document.getElementById("Email").value;
  const date = document.getElementById("date").value;
  const city = document.getElementById("Stad").value;
  const könRadio = document.querySelector('input[name="kon"]:checked');
  const kön = könRadio ? könRadio.value : "";

  showProfileInfo.innerHTML = `
    <h3>${firstName} ${lastName}</h3>
    <p>${email}</p>
    <p>${date}</p>
    <p>${city}</p>
    <p>${kön}</p>
  `;
}

function clearProfile() {
  showProfileInfo.innerHTML = ""
}

update.addEventListener("click", showProfile);
clear.addEventListener("click", clearProfile);

showProfile();
