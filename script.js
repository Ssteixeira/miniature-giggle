function showLove() {
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("sadResult").classList.add("hidden");
}

function showSad() {
    document.getElementById("sadResult").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
}

function moveButton() {
    const noButton = document.getElementById("noBtn");
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}
