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

function checkPWAInstallation() {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
  const installButton = document.getElementById("installPWA");

  if (installButton) {
    if (isStandalone) {
      console.log("✅ PWA가 설치된 상태입니다.");
      installButton.style.display = "none";  
    } else {
      console.log("❌ PWA가 설치되지 않은 상태입니다.");
      installButton.style.display = "block"; 
    }
  }
}

 
window.addEventListener("load", checkPWAInstallation);
