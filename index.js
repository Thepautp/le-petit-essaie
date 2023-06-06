document.addEventListener("DOMContentLoaded", function () {
    liff.init({
        liffId: "1661282389-E5XPXoVd",
    }).then(() => {
        displayMessage("LIFF initialized");
    }).catch ((error) => {
        displayMessage(error);
    });
});

function displayMessage(message) {
    var messageBanner = document.getElementById('error');
    messageBanner.innerText = message;
}