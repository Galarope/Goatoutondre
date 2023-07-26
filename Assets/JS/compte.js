let utilisateur = localStorage.getItem("utilisateurs");
let user = JSON.parse(utilisateur);

if (!user) {
  document.location.assign("login.html");
}

let identifiant = document.getElementById("identifiant");
let email = document.getElementById("email");
let formtelinput = document.getElementById("formtelinput");
let savetelephone = document.getElementById("savetelephone");
let formadresseinput = document.getElementById("formadresseinput");
let saveadresse = document.getElementById("saveadresse");

identifiant.innerText = user.name;
email.innerText = user.email;
formtelinput.value = user.telephone;
formadresseinput.value = user.adresse;

savetelephone.addEventListener("click", funcTel);
saveadresse.addEventListener("click", funcAdresse);

function funcTel() {
  user = user ? user : {};
  user['telephone'] = formtelinput.value;
  localStorage.setItem('utilisateurs', JSON.stringify(user));
}

function funcAdresse() {
  user = user ? user : {};
  user['adresse'] = formadresseinput.value;
  localStorage.setItem('utilisateurs', JSON.stringify(user));
}

// tableau a onglets

const tabs = [...document.querySelectorAll(".tab")];

tabs.forEach((tab) => tab.addEventListener("click", tabsAnimation));

const tabContents = [...document.querySelectorAll(".tab-content")];

function tabsAnimation(e) {
  const indexToRemove = tabs.findIndex((tab) =>
    tab.classList.contains("active-tab")
  );

  tabs[indexToRemove].setAttribute("aria-selected", "false");
  tabs[indexToRemove].setAttribute("tabindex", "-1");
  tabs[indexToRemove].classList.remove("active-tab");
  tabContents[indexToRemove].classList.remove("active-tab-content");

  const indexToShow = tabs.indexOf(e.target);

  tabs[indexToShow].setAttribute("tabindex", "0");
  tabs[indexToShow].setAttribute("aria-selected", "true");
  tabs[indexToShow].classList.add("active-tab");
  tabContents[indexToShow].classList.add("active-tab-content");
}

tabs.forEach((tab) => tab.addEventListener("keydown", arrowNavigation));

let tabFocus = 0;
function arrowNavigation(e) {
  if (e.keyCode === 39 || e.keyCode === 37) {
    tabs[tabFocus].setAttribute("tabindex", -1);

    if (e.keyCode === 39) {
      tabFocus++;

      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    } else if (e.keyCode === 37) {
      tabFocus--;

      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  }
}

const textavis = document.getElementById("textavis");

function vidange() {
  textavis.value = "";
}
