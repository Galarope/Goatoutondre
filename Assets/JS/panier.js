let ul = document.getElementsByClassName("list")[0];
let basket = JSON.parse(localStorage.getItem("basket"));
/** */
let alerte = document.createElement("li");
alerte.setAttribute("class", "alerte")
alerte.textContent = "Votre panier est vide"
/** */
// JSON.parse()
// JSON.stringify()
if(!basket || Object.keys(basket).length === 0) {
    ul.appendChild(alerte);
} else {
    let produits = basket.produits;
    let index = 0;
    for (let produit of produits) {
      let li = document.createElement("li");
        li.setAttribute("class", "card-product");
        li.setAttribute("id", index++)
      let img = document.createElement("img");
      img.setAttribute("class", "product-img");
      let div = document.createElement("div");
      div.setAttribute("class", "product");
      let h3 = document.createElement("h3");
      h3.setAttribute("class", "product-name");
      let des = document.createElement("div");
      des.setAttribute("class", "description");
      let p = document.createElement("p");
      p.setAttribute("class", "product-price");
      let span = document.createElement("span");
      span.setAttribute("class", "close");

      img.src = produit.img;

      img.setAttribute("width", "100px");
      img.setAttribute("height", "100px");

      h3.textContent = produit.name;
      des.textContent = produit.description ? produit.description : "";
      p.textContent = produit.prix ? produit.prix + " €" : 0 + " €";
      span.textContent = "X";
        
      span.addEventListener("click", () => removeItem(li));

      div.appendChild(h3);
      div.appendChild(des);
      div.appendChild(p);

      li.appendChild(img);
      li.appendChild(div);
        li.appendChild(span);

        ul.appendChild(li);
    }
}

let viderBtn = document.getElementsByClassName("viderBtn")[0];
function viderPanier() {
    localStorage.removeItem("basket")
    let newUl = document.createElement("ul");
    newUl.appendChild(alerte);

    let container = document.getElementsByClassName("basket")[0];
    container.replaceChild(newUl, ul);
};

viderBtn.addEventListener("click", viderPanier);

function removeItem(item) {
    let id = item.getAttribute("id");
    id = parseInt(id);

    ul.removeChild(item);
    let basket = localStorage.getItem("basket");
    basket = JSON.parse(basket);
    let produits = basket.produits;
    produits = [...produits.slice(0, id), ...produits.slice(id + 1)];

    let dateDeReservation = basket.dateDeReservation;
    let dateDeRetour = basket.dateDeRetour;
    // let total = 0;

    // for (let produit of produits)
    //     if (produit.prix)
    //         total += produit.prix;
    
    // total = calculerLocation(total, dateDeReservation, dateDeRetour)
    basket.produits = produits;
    // basket.total = total;

    localStorage.setItem("basket", JSON.stringify(basket));
}


/**
 * {id: 2
img: "../Assets/Images/chevres/Images_Chevres/Chèvre n°3.jpeg"
name: "Mano"
prix: 20
showmore: "Voir d'avantage"}
 */

let payerBtn = document.getElementsByClassName("payerBtn")[0];
payerBtn.addEventListener("click", () => {
    window.location.replace("../../../Goatoutondre/HTML/paiement.html");
})

