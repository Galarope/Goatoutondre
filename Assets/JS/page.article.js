let chevreName = document.getElementsByClassName("chevreName")[0];
let chevrePrix = document.getElementsByClassName("chevrePrix")[0];
let imgChevre = document.getElementsByClassName("chevreImg")[0];
let ajouterChevreBtn = document.getElementsByClassName("ajouterChevre")[0];
let ajouterNoeudBtn = document.getElementsByClassName("ajouterNoeud")[0];
let totalDisplay = document.getElementsByClassName("total")[0];


let basket = localStorage.getItem("basket");
if(!basket) basket = {produits: [], dateDeReservation: "", dateDeRetour: "", total: 0};
else basket = JSON.parse(basket);


/**Chevres */
let queryString = window.location.search;
let chevreId = new URLSearchParams(queryString).get("id");
chevreId = parseInt(chevreId)
/**let queryString = ...
 * let userId = ....
 * userId = parseInt(userId);
 */

let chevre = chevres.filter(chevre => chevre.id === chevreId)[0];

chevreName.textContent = chevre.name;
imgChevre.src = chevre.img;
chevrePrix.textContent = chevre.prix + " €";

let dateDeReservation = document.getElementById("reservation");
let dateDeRetour = document.getElementById("retour");

let current = new Date();
let minValue = current.toISOString().split("T")[0];
let maxValue = new Date(current.setDate(current.getDate() + 30)).toISOString().split("T")[0];
dateDeReservation.setAttribute("min", minValue);
dateDeReservation.setAttribute("max", maxValue);
dateDeRetour.setAttribute("min", minValue);
dateDeRetour.setAttribute("max", maxValue);

function ajouterChevre() {
    if(chevre.total) {
        basket.total -= chevre.total;
        basket.produits.shift();
    }
        

    if (dateDeReservation.value) chevre.setDateDeReservation( new Date(dateDeReservation.value));
    if (dateDeRetour.value) chevre.setDateDeRetour(new Date(dateDeRetour.value));
    chevre.calculateTotal();

    basket.produits.push(chevre);
          
    // const total = calculerLocation(chevre.prix, dateDeReservation.value, dateDeRetour.value);
    basket.total += chevre.total;
    totalDisplay.style.display = "block";

    if(document.querySelector(".span-total"))
        totalDisplay.removeChild(document.querySelector(".span-total"));

    let spanTotal = document.createElement("span");
    spanTotal.setAttribute("class", "span-total")
    spanTotal.textContent = " " + chevre.total + " €";
    totalDisplay.appendChild(spanTotal);
    localStorage.setItem("basket", JSON.stringify(basket))
}

ajouterChevreBtn.addEventListener("click", ajouterChevre);


/**Noeuds */
// pour les noeuds papillion = changement de couleur
// 
let noeud = document.getElementById("noeud");
let couleurnoeuds = document.getElementById("couleurnoeuds");

function onChange() {
  var value = couleurnoeuds.value;
  
  switch (value) {
    case "0":
        noeud.setAttribute("src", noeuds[0].img);
        break;
    case "1":
        noeud.setAttribute("src",noeuds[1].img);
        break;
    case "2":
        noeud.setAttribute("src",noeuds[2].img);
        break;
    default:
        noeud.setAttribute("src",noeuds[0].img);
        break;
  }
}
couleurnoeuds.onchange = onChange;
onChange();

function ajouterNoeud() {
    basket.produits.push(noeuds[couleurnoeuds.value]);
    /**Ajouter le prix du noeud choisi au total */
    basket.total += noeuds[couleurnoeuds.value].prix;
    /** */
    localStorage.setItem("basket", JSON.stringify(basket))
}

ajouterNoeudBtn.addEventListener("click", ajouterNoeud);

/**Solaire */

let solaireImg = document.getElementsByClassName("solaireImg")[0];
let nomDeSolaire = document.getElementsByClassName("nomDeSolaire")[1];
let ajouterSolaireBtn = document.getElementsByClassName("ajouterSolaire")[1];

let solaire = solaires[0];
nomDeSolaire.textContent = solaire.name;
solaireImg.src = solaire.img;


function ajouterSolaire() {
  basket.produits.push(solaire);
  /**Ajouter le prix du solaire au total */
  basket.total += solaire.prix;
  localStorage.setItem("basket", JSON.stringify(basket));
}
ajouterSolaireBtn.addEventListener("click", ajouterSolaire)

/**Chapeau */

let chapeauImg = document.getElementsByClassName("chapeauImg")[0];
let nomDeChapeau = document.getElementsByClassName("nomDeChapeau")[1];
let ajouterChapeauBtn = document.getElementsByClassName("ajouterChapeau")[1];

let chapeau = chapeaux[0];
nomDeChapeau.textContent = chapeau.name;
chapeauImg.src = chapeau.img;

function ajouterChapeau(){
  basket.produits.push(chapeau);
  /**Ajouter le prix du chapeau au total */
  basket.total += chapeau.prix;
  localStorage.setItem("basket", JSON.stringify(basket));
}
ajouterChapeauBtn.addEventListener("click", ajouterChapeau)


// function calculerLocation(prixAchat, dateDeReservation, dateDeRetour) {
//     let duree = new Date(dateDeRetour).getDate() - new Date(dateDeReservation).getDate();
//     return duree * prixAchat;
// }

function calculerLocation(prixAchat, dateDeReservation, dateDeRetour) {
  dateDeReservation = new Date(dateDeReservation).getDate();
    dateDeRetour = new Date(dateDeRetour).getDate();
    console.log("dateDeReservation, " + dateDeReservation);
    console.log("dateDeRetour, " + dateDeRetour)

  if (dateDeRetour <= dateDeReservation) dateDeRetour += 30;

  let duree = dateDeRetour - dateDeReservation;
  return duree * prixAchat;
}


// pour le panier
function saveBasket(){
    localStorage.setItem("basket", JSON.stringify(basket));
}

// function getBasket(basket) {
//     let basket = localStorage.getItem("basket");
//     if(basket == null){
//         return [];
//     }else{
//         return JSON.parse(basket);
//      }
// }


function addBasket(product){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if(foundProduct != undefined){
        foundProduct.quantity++; 
        // plus haut pour faire quantité 2: comment faire pour 1
    }else{
        product.quantity
    }
    basket.push(product);
    saveBasket(basket);
}

function removeFoundBasket(product){
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id),
    saveBasket(basket);
}

function getNumberProduct(){
    let basket = getBasket();
    let number = 0;
    for (let product of basket) {
        number+= product.quantity;
    }
    return number;
}

function getTotalPrice (){
    let basket = getBasket();
    let total = 0;
    for (let product of basket) {
        total+= product.quantity * product.price;
    }
    return total; 
}

