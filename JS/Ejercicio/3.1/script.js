function likeButton() {
    // Selecciona el elemento que contiene el texto de los likes
    let likeText = document.querySelector(".arribaDer p");

    // Extrae el número actual de likes del texto (por ejemplo: "3 like(s)" -> 3)
    let currentLikes = parseInt(likeText.innerText);

    // Incrementa el contador
    currentLikes++;

    // Actualiza el texto con el nuevo número de likes
    likeText.innerText = `${currentLikes} like(s)`;
}
