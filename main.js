// Seleccionem els elements del carrusel
const viatges = document.querySelector(".viatges"); // const viatges: selecciona el contenidor on tenim les targetes de destinacions.
const anterior = document.getElementById("anterior"); // const anterior: selecciona la fletxa per anar cap enrere.
const seguent = document.getElementById("seguent"); // const seguent: selecciona la fletxa per avançar.

// Distància que es mou el carrusel
const pas = 275; // És la distància total

// Quan cliquem la fletxa següent
seguent.addEventListener("click", function(){

    // Movem el carrusel cap a l'esquerra
    viatges.scrollBy({ // mou el carrusel.
        left: pas, // el mou 375 píxels cap a la dreta.
        behavior: "smooth" // fa que el moviment sigui suau.
    });
}); 

// Quan cliquem la flexa anterior
anterior.addEventListener("click", function(){

    // Tornem a la detinació anterior
     viatges.scrollBy({
        left: -pas,
        behavior: "smooth"
    });
});