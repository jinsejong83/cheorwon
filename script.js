function isRunningStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches;
}

function checkPWAInstallation() {
  const installButton = document.getElementById("installPWA");

  if (installButton) {
    if (isRunningStandalone()) {
      console.log("✅ PWA 내부에서 실행 중! 버튼 숨김.");
      installButton.style.display = "none";   
    } else {
      console.log("❌ PWA가 설치되지 않음! 버튼 표시.");
      installButton.style.display = "block";  
    }
  }
}

window.addEventListener("load", checkPWAInstallation);
