document.addEventListener("DOMContentLoaded", function() {
    var avisoCookies = document.getElementById("cookies");
    var cookiesForm = document.getElementById("cookiesForm");

    // Comprobar si el usuario ya aceptó las cookies
    if (!cookiesAceptadas()) {
        mostrarAvisoCookies();
    }

    // Mostrar el aviso de cookies
    function mostrarAvisoCookies() {
        avisoCookies.style.display = "block";
    }

    // Ocultar el aviso de cookies y almacenar las preferencias del usuario
    function aceptarCookies(event) {
        event.preventDefault();
        avisoCookies.style.display = "none";
        almacenarCookiesAceptadas();
    }

    // Función para verificar si el usuario ya aceptó las cookies
    function cookiesAceptadas() {
        return localStorage.getItem("cookiesAceptadas") === "true";
    }

    // Función para almacenar las preferencias del usuario en el almacenamiento local
    function almacenarCookiesAceptadas() {
        var checkboxes = cookiesForm.querySelectorAll("input[type=checkbox]:checked");
        localStorage.setItem("cookiesAceptadas", "true");
        checkboxes.forEach(function(checkbox) {
            localStorage.setItem(checkbox.name, "true");
        });
    }

    // Agregar evento de envío al formulario de cookies
    cookiesForm.addEventListener("submit", aceptarCookies);

    // Ocultar el aviso de cookies si ya han sido aceptadas
    if (cookiesAceptadas()) {
        avisoCookies.style.display = "none";
    }
});

/* corrección de JS */
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".imagenes ul");
    const slides = document.querySelectorAll(".imagenes ul li");
    const btnAntes = document.querySelector(".botonAntes");
    const btnDespues = document.querySelector(".botonDespues");
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
    const intervalTime = 3000;
    let slideInterval;

    function startSlide() {
        slideInterval = setInterval(SigSlide, intervalTime);
    }

    function pauseSlide() {
        clearInterval(slideInterval);
    }

    function VeHastaSlide(index) {
        slider.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
    }

    function SigSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        VeHastaSlide(currentIndex);
    }

    function AntSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        VeHastaSlide(currentIndex);
    }

    btnDespues.addEventListener("click", function() {
        SigSlide();
        pauseSlide();
        startSlide();
    });

    btnAntes.addEventListener("click", function() {
        AntSlide();
        pauseSlide();
        startSlide();
    });

    startSlide();
});