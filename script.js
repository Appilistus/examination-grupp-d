function saveData() {
  console.log("Saving data to localStorage...");
  localStorage.setItem("Förnamn", document.getElementById("Förnamn").value);
  localStorage.setItem("Efternamn", document.getElementById("Efternamn").value);
  localStorage.setItem("Email", document.getElementById("Email").value);
  localStorage.setItem("Stad", document.getElementById("Stad").value);
  localStorage.setItem("Födelsedatum", document.getElementById("date").value);

  setWelcomeName();

  const kön = document.querySelector('input[name="kon"]:checked');
  if (kön) {
    localStorage.setItem("Kön", kön.value);
  }
}

function setWelcomeName() {
  const savedName = localStorage.getItem("Förnamn");
  const welcomeName = document.getElementById("welcome-name");
  if (welcomeName && savedName) {
    welcomeName.textContent = `${savedName}!`;
  }
}

function removeWelcomeName() {
  const welcomeName = document.getElementById("welcome-name");
  if (welcomeName) {
    welcomeName.textContent = "";
  }
}
function clearForm() {
  removeWelcomeName();
  localStorage.clear();
  document.getElementById("Förnamn").value = "";
  document.getElementById("Efternamn").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Stad").value = "";
  document.getElementById("date").value = "";
  const selectedKön = document.querySelector('input[name="kon"]:checked');
  if (selectedKön) {
    selectedKön.checked = false;
  }
}

function loadData() {
  document.getElementById("Förnamn").value = localStorage.getItem("Förnamn") || "";
  document.getElementById("Efternamn").value = localStorage.getItem("Efternamn") || "";
  document.getElementById("Email").value = localStorage.getItem("Email") || "";
  document.getElementById("Stad").value = localStorage.getItem("Stad") || "";
  document.getElementById("date").value = localStorage.getItem("Födelsedatum") || "";

  setWelcomeName();
  
  const savedKön = localStorage.getItem("Kön");
  if (savedKön) {
    const könRadio = document.querySelector(`input[name="kon"][value="${savedKön}"]`);
    if (könRadio) {
      könRadio.checked = true;
    }
  }
}


const saveProfileButton = document.getElementById("saveBtn");
saveProfileButton.addEventListener("click", saveData);

const clearProfileButton = document.getElementById("clearBtn");
clearProfileButton.addEventListener("click", clearForm);


const profileBtn = document.getElementById("profileBtn");
const profileForm = document.getElementById("profile");

profileBtn.addEventListener("click", (event) => {
  loadData();
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

  showProfileInfo.replaceChildren();

  const nameHeading = document.createElement("h3");
  nameHeading.textContent = `${firstName} ${lastName}`.trim();
  showProfileInfo.appendChild(nameHeading);

  [email, date, city, kön].forEach((value) => {
    const detail = document.createElement("p");
    detail.textContent = value;
    showProfileInfo.appendChild(detail);
  });
}

function clearProfile() {
  showProfileInfo.replaceChildren();
}

update.addEventListener("click", showProfile);
clear.addEventListener("click", clearProfile);


document.addEventListener("DOMContentLoaded", () => {
  loadData();
  showProfile();
});
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const logoutButton = document.getElementById("logoutButton");
const loginSection = document.getElementById("loginSection");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;


    if (email === "test@gmail.com" && password === "123456") {
        message.textContent = "Du är nu inloggad!";
        message.style.color = "green";

        loginSection.hidden = true;
        dashboardSection.hidden = false;
        dashboardBtn.hidden = false;
        profileBtn.hidden = false;
        logoutButton.hidden = false;
    } else {
        message.textContent = "Fel e-post eller lösenord!";
        message.style.color = "red";
    }
});

logoutButton.addEventListener("click", function() {
    loginSection.hidden = false;
    dashboardSection.hidden = true;
    profileForm.hidden = true;
    dashboardBtn.hidden = true;
    profileBtn.hidden = true;
    logoutButton.hidden = true;

    loginForm.reset();

    message.textContent = "Du har loggat ut.";
    message.style.color = "white";
});
