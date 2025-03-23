document.addEventListener("DOMContentLoaded", () => {
    const soundButtons = document.querySelectorAll(".btn");
    const stopButton = document.querySelector(".stop");
    let currentAudio = null;

    function stopAudio() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }

    soundButtons.forEach(button => {
        button.addEventListener("click", () => {
            stopAudio();
            const soundName = button.innerText.toLowerCase();
            currentAudio = new Audio(`sounds/${soundName}.mp3`);
            currentAudio.play();
        });
    });

    stopButton.addEventListener("click", stopAudio);
});

