document.addEventListener("DOMContentLoaded", function () {
    liff.init({
        liffId: "1661282389-E5XPXoVd",
    }).then(() => {
        displayMessage("LIFF initialized");
        liff.getProfile().then((profile) => {
            displayMessage(`profile loaded: ${profile}`);
            onLogin(profile.avatarUr, profile.name, profile.status);
        }).catch ((error) => {
            displayMessage(error);
            onLogin('https://placekitten.com/g/200/300', "No-Name", "Demo");
        });
    }).catch((error) => {
        displayMessage(error);
    });
});

function displayMessage(message) {
    var messageBanner = document.getElementById('error');
    messageBanner.innerText = message;
}

function onLogin(avatarUr, name, status) {
    const avatarElement = document.querySelector('.profile__avatar');
    const nameElement = document.querySelector('.profile__name');
    const statusElement = document.querySelector('.profile__status');

    avatarElement.src = avatarUr;
    nameElement.textContent = name;
    statusElement.textContent = status;
}