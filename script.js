let deferredPrompt;
const installPWAButton = document.getElementById('installPWA');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); 
    deferredPrompt = event;

    installPWAButton.style.display = 'block';

    installPWAButton.addEventListener('click', () => {
        deferredPrompt.prompt();  
        deferredPrompt.userChoice
            .then((choiceResult) => {
                console.log(choiceResult.outcome); 
                installPWAButton.style.display = 'none';  
                deferredPrompt = null;
            });
    });
});
