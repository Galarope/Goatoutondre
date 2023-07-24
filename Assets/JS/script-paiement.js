let basket = JSON.parse(localStorage.getItem("basket"));

/**Script for popup modal*/
const modal = document.getElementsByClassName("modal")[0];
const paypalIcon = document.getElementsByClassName("paypal-icon")[0];
const closeBtn = document
  .getElementsByClassName("modal")[0]
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

/**Navigation from payment*/
const validateBtns = document.getElementsByClassName("validate-btn");

for (let btn of validateBtns) {
  btn.addEventListener("click", () => {
    document.location.href = "../../Goatoutondre/Animation/index.html";
  });
}
/** */

let products = basket.produits;
let ul = document.getElementsByClassName("list")[0];

for (let product of products) {
  let card = document.createElement("li");
  card.setAttribute("class", "card");

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

  let span = document.createElement("span");
    span.setAttribute("class", "close");
    
    img.src = product.img;
    h3.textContent = product.name;
    des.textContent = product.description ? product.description : " ";
    p.textContent = product.prix ? product.prix + " €" : 0 + " €";
    span.textContent = "X";

    productContainer.appendChild(h3);
    productContainer.appendChild(des);
    productContainer.appendChild(p);

    card.appendChild(img);
    card.appendChild(productContainer);
    card.appendChild(span);

    ul.appendChild(card);
}
