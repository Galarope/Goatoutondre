let listeChevres = document.getElementById("liste-chevres");

for (const chevre of chevres) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","card");
    newDiv.innerHTML = `

                <div id="imgchevres">
                <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src="${chevre.img}" alt="Avatar" style="width:250px;height:200px;border-radius:10px;">
                  </div>
                  <div class="flip-card-back">
                    <h1>${chevre.name}</h1>
                    <a href="../HTML/page.article.html?id=${chevre.id}"><button>Voir d'avantage</button></a>
                  </div>
                </div>
              </div>
              </div>
    `
    listeChevres.appendChild(newDiv);
}






//   <img class="imgchèvre" src="${chevre.img}" alt="Card image cap">
//<div class="card-body">
//<h5 class="card-title">${chevre.name}</h5>
//<p class="card-text">${chevre.price}</p>
//<a href=""><button class="voir-davantage">Voir d'avantage</button></a>
//</div>
// 



$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
);