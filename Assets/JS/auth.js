/**Log in */
let loginEmail = document.getElementById("logIn-email");
let loginPassword = document.getElementById("logIn-password");
let loginBtn = document.getElementById("login");

let users = localStorage.getItem("utilisateurs");

function login() {
    if (!users || users.length === 0)
        return alert("Utilisateur Non Existe. Veuillez Registrer.");
    
    users = JSON.parse(users);
    console.log(users);
    
    let email = loginEmail.value;
    let password = loginPassword.value;
    
    let index = users.findIndex(u => u.email === email);
    if (index === -1)
        return alert("Email Incorrect");
    
    let user = users[index];
    if (password !== user.password)
        return alert("Mot de Passe Incorrect");
    
    window.location.replace("../HTML/index.html?userId=" + user.id);

}

loginBtn.addEventListener("click", login);

/**Sign up */
let signUpUsername = document.getElementById("signUp-username");
let signUpEmail = document.getElementById("signUp-email");
let signUpPassword = document.getElementById("signUp-password");
let registerBtn = document.getElementById("register");

function register() {
    let users = localStorage.getItem("utilisateurs") ? JSON.parse(localStorage.getItem("utilisateurs")) : [];
    
    let username = signUpUsername.value;
    let email = signUpEmail.value;
    let password = signUpPassword.value;

    let index = users.findIndex(u => u.email === email);

    if (index !== -1)
        return alert("Email est déjà utilisé.");
    
    let user = new User(username, email, password);
    users.push(user);
    localStorage.setItem("utilisateurs", JSON.stringify(users));

    window.location.replace("../HTML/index.html?userId=" + user.id);
};

registerBtn.addEventListener("click", register);