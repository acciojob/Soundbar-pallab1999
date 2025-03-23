//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const soundNames = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttons";
    document.body.appendChild(buttonsContainer);

    let currentAudio = null;

    // Function to stop currently playing audio
    function stopAudio() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }

    // Create buttons for sounds
    soundNames.forEach(sound => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = sound;

        button.addEventListener("click", () => {
            stopAudio();
            currentAudio = new Audio(`sounds/${sound}.mp3`);
            currentAudio.play();
        });

        buttonsContainer.appendChild(button);
    });

    // Create stop button
    const stopButton = document.createElement("button");
    stopButton.classList.add("btn", "stop");
    stopButton.innerText = "Stop";

    stopButton.addEventListener("click", stopAudio);

    buttonsContainer.appendChild(stopButton);
});
