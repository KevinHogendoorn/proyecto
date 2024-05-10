document.addEventListener("DOMContentLoaded", function() {
    var avisoCookies = document.getElementById("avisoCookies");
    var cookiesForm = document.getElementById("cookiesForm");

    if (!cookiesAceptadas()) {
        mostrarAvisoCookies();
    }

    // Mostrar el aviso de cookies
    function mostrarAvisoCookies() {
        avisoCookies.style.display = "block";
    }

    function aceptarCookies(event) {
        event.preventDefault();
        avisoCookies.style.display = "none";
        almacenarCookiesAceptadas();
    }

    function cookiesAceptadas() {
        return localStorage.getItem("cookiesAceptadas") === "true";
    }

    function almacenarCookiesAceptadas() {
        var checkboxes = cookiesForm.querySelectorAll("input[type=checkbox]:checked");
        localStorage.setItem("cookiesAceptadas", "true");
        checkboxes.forEach(function(checkbox) {
            localStorage.setItem(checkbox.name, "true");
        });
    }
    cookiesForm.addEventListener("submit", aceptarCookies);

    // Ocultar el aviso de cookies si ya han sido aceptadas
    if (cookiesAceptadas()) {
        avisoCookies.style.display = "none";
    }
});