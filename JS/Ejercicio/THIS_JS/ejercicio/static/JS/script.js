//login
function Login(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}
//add definition
function esconder(element) {
    element.remove();
}
//likes
let likes = 13;

const boton = document.getElementById("likeBtn");

boton.addEventListener("click", () => {
    likes++;
    boton.textContent = likes + " Likes";
    alert("Haz dado like");
});

