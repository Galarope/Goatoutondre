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
    for (let produit of produits) {
      let li = document.createElement("li");
      li.setAttribute("class", "card-product");
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

      div.appendChild(h3);
      div.appendChild(des);
      div.appendChild(p);

      li.appendChild(img);
      li.appendChild(div);
      li.appendChild(span);

      ul.appendChild(li);
    }
}

let viderBtn = document.getElementsByClassName("vider-panier")[0];
function viderPanier() {
    localStorage.removeItem("basket")
    let newUl = document.createElement("ul");
    newUl.appendChild(alerte);

    let container = document.getElementsByClassName("basket")[0];
    container.replaceChild(newUl, ul);
};

viderBtn.addEventListener("click", viderPanier)


/**
 * {id: 2
img: "../Assets/Images/chevres/Images_Chevres/Chèvre n°3.jpeg"
name: "Mano"
prix: 20
showmore: "Voir d'avantage"}
 */