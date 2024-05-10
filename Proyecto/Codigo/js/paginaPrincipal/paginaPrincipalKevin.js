document.addEventListener("DOMContentLoaded", function() {
    var avisoCookies = document.getElementById("cookies");
    var cookiesForm = document.getElementById("formularioCookies");

    if (!cookiesAceptadas()) {
        mostrarAvisoCookies();
    }

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

    if (cookiesAceptadas()) {
        avisoCookies.style.display = "none";
    }
});
