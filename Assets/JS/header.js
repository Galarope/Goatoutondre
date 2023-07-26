  // ajouter la condition pour afficher 
  let linkToAccount = document.getElementById("linkToAccount");
  let linkToLogin = document.getElementById("linkToLogin");

  utilisateur = localStorage.getItem("utilisateurs");
  user = JSON.parse(utilisateur);
  
  if (user) {
    linkToAccount.setAttribute("href", "compte.html")
    linkToLogin.innerText = "Logout";
    linkToLogin.addEventListener("click", deco);
  } else {
    linkToAccount.setAttribute("href", "login.html")
    linkToLogin.innerText = "Login";
  }

  function deco() {
    localStorage.removeItem("utilisateurs");
  }
  
 