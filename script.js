let deferredPrompt;

 
function isMobileDevice() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

window.addEventListener("beforeinstallprompt", (event) => {
    if (!isMobileDevice()) return;  
    event.preventDefault();
    deferredPrompt = event;

    
    let installBanner = document.createElement("div");
    installBanner.innerHTML = `
        <div style="position: fixed; bottom: 10px; left: 50%; transform: translateX(-50%);
                    background: #4CAF50; color: white; padding: 15px; border-radius: 10px;
                    text-align: center; cursor: pointer; font-size: 18px;">
            📲 앱 설치하기 (홈 화면에 추가)
        </div>
    `;
    installBanner.onclick = () => {
        installBanner.style.display = "none";
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("사용자가 웹앱을 설치함");
            } else {
                console.log("사용자가 설치를 취소함");
            }
            deferredPrompt = null;
        });
    };
    document.body.appendChild(installBanner);
});
