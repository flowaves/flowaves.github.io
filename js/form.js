function generateMailtoLink(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var montageType = document.getElementById('montageType').value;
    var budget = document.getElementById('budget').value;
    var message = document.getElementById('message').value;

    var subject = "Demande de montage vidéo";
    var body = "Bonjour,\n\nJe m'appelle " + name + " et je suis intéressé par un montage vidéo de type " + montageType + ". Mon budget est de " + budget + " euros.\n\n----------\n" + message;

    var mailtoLink = "mailto:jlaloy@proton.me?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
}