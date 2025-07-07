document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    let hasStarted = false;

    // Function to start music
    function startMusic() {
        if (!hasStarted) {
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        hasStarted = true;
                        console.log("Music started successfully");
                    })
                    .catch((error) => {
                        console.log("Playback failed:", error);
                    });
            }
        }
    }

    // Gắn nhiều loại sự kiện, không dùng preventDefault
    function bindStartEvents() {
        ["touchstart", "touchend", "click"].forEach((eventType) => {
            document.addEventListener(eventType, startMusic, { once: true });
        });
    }
    bindStartEvents();

    // Add event listener for when audio ends to restart it
    audio.addEventListener("ended", function () {
        audio.currentTime = 0;
        audio.play();
    });
});
