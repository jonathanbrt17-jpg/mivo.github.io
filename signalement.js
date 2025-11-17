// Initialisation EmailJS
(function() {
    emailjs.init("yH8QNZZ5oHdu_ZYRE");
})();

document.getElementById("signalementForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_bq2k9m3", "template_8hjzocn", {
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        telephone: document.getElementById("telephone").value,
        raison: document.getElementById("raison").value,
        message: document.getElementById("message").value
    })
    .then(() => {
        alert("✅ Signalement envoyé avec succès !");
        document.getElementById("signalementForm").reset();
    })
    .catch(() => {
        alert("❌ Erreur lors de l’envoi. Réessaie plus tard.");
    });
});
