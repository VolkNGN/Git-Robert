document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;
    
    // Charger l'état du mode sombre depuis le stockage local
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Désactiver le mode sombre';
    }

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            toggleButton.textContent = 'Désactiver le mode sombre';
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            toggleButton.textContent = 'Activer le mode sombre';
        }
    });
});