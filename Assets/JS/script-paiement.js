

/**Script for popup modal*/
const modal = document.getElementsByClassName("cus-modal")[0];
const paypalIcon = document.getElementsByClassName("paypal-icon")[0];
const closeBtn = document
  .getElementsByClassName("cus-modal")[0]
  .getElementsByClassName("close")[0];

paypalIcon.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

/** */
let basket = JSON.parse(localStorage.getItem("basket"));
let products = basket.produits;
let ul = document.getElementsByClassName("list")[0];
let dateDeReservation;
let dateDeRetour;

/**Navigation from payment*/
const validateBtns = document.getElementsByClassName("validate-btn");

for (let btn of validateBtns) {
  btn.addEventListener("click", () => {
    localStorage.removeItem("basket");
    document.location.href = "../Animation/index.html";
  });
}
/** */


for (let product of products) {
  if (product.type === "chevre") {
    dateDeReservation = product.dateDeReservation;
    dateDeRetour = product.dateDeRetour;
  }

  let card = document.createElement("li");
  card.setAttribute("class", "cus-card");

  let img = document.createElement("img");
  img.setAttribute("class", "product-img");
  img.setAttribute("width", "100px");
  img.setAttribute("height", "100px");

  let productContainer = document.createElement("div");
  productContainer.setAttribute("class", "product");

  let h3 = document.createElement("h3");
  h3.setAttribute("class", "product-name");

  let des = document.createElement("div");
  des.setAttribute("class", "description");

  let p = document.createElement("p");
  p.setAttribute("class", "product-price");

  let total = document.createElement("span");
      total.setAttribute("class", "span-total");
    
    img.src = product.img;
    h3.textContent = product.name;
    des.textContent = product.description ? product.description : " ";
    p.textContent = product.prix ? product.prix + " €" : 0 + " €";
    if(product.total) {
      total.textContent = " -> " + product.total + " €";
      p.appendChild(total);
    }

    productContainer.appendChild(h3);
    productContainer.appendChild(des);
    productContainer.appendChild(p);

    card.appendChild(img);
    card.appendChild(productContainer);
  
    // card.appendChild(span);

    ul.appendChild(card);
}

let reservationDateDisplay = document.getElementsByClassName("reservation-date")[0];
let returnDateDisplay = document.getElementsByClassName("return-date")[0];
let totalDisplay = document.getElementsByClassName("total")[0];

reservationDateDisplay.textContent =
  "Date de Réservation: " +
  new Date(dateDeReservation).toLocaleString().split(" ")[0];
returnDateDisplay.textContent =
  "Date de Retour: " +
  new Date(dateDeRetour).toLocaleString().split(" ")[0];
totalDisplay.textContent = "Total: " + basket.total + " €";