let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    document.getElementById("installPWA").style.display = "block";
});

document.getElementById("installPWA").addEventListener("click", () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("사용자가 PWA를 설치함");
            } else {
                console.log("사용자가 설치를 취소함");
            }
            deferredPrompt = null;
        });
    }
});
