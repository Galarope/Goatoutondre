/**Script for popup modal*/
const modal = document.getElementsByClassName("modal")[0];
const paypalIcon = document.getElementsByClassName("paypal-icon")[0];
const closeBtn = document.getElementsByClassName("modal")[0].getElementsByClassName("close")[0];

paypalIcon.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})

window.addEventListener("click", e => {
    if (e.target === modal)
        modal.style.display = "none";
        
})

/**Navigation from payment*/
const validateBtns = document.getElementsByClassName("validate-btn");

for (let btn of validateBtns) {
    btn.addEventListener("click", () => {
        document.location.href = "../../Goatoutondre/Animation/index.html";
    })
}