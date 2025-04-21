function showLove() {
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("sadResult").classList.add("hidden");

    stopSadSound();
    playLoveSound();
}

function showSad() {
    document.getElementById("sadResult").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");

    stopLoveSound();
    playSadSound();
}

function playLoveSound() {
    const loveAudio = document.getElementById("loveAudio");
    loveAudio.currentTime = 0;
    loveAudio.play();
}

function stopLoveSound() {
    const loveAudio = document.getElementById("loveAudio");
    loveAudio.pause();
    loveAudio.currentTime = 0;
}

function playSadSound() {
    const sadAudio = document.getElementById("sadAudio");
    sadAudio.currentTime = 0;
    sadAudio.play();
}

function stopSadSound() {
    const sadAudio = document.getElementById("sadAudio");
    sadAudio.pause();
    sadAudio.currentTime = 0;
}

function moveButton() {
    const noButton = document.getElementById("noBtn");
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}
