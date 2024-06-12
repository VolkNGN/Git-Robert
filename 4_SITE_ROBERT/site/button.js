// script.js
const buttons = document.querySelectorAll('.button');
const content = document.getElementById('content');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Supprimer la classe "active" de tous les boutons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Ajouter la classe "active" au bouton cliqué
        button.classList.add('active');

        // Afficher le contenu correspondant au bouton cliqué
        // Vous devrez remplacer ces exemples par votre propre contenu
        switch (button.id) {
            case 'depannage':
                content.innerHTML = '<h1>Dépannage</h1><p>contenu du dépannage</p>';
                break;
            case 'reparations':
                content.innerHTML = '<h1>Réparations/Tutoriels</h1><p>Contenu des réparations/tutoriels.</p>';
                break;
            case 'recyclage':
                content.innerHTML = '<h1>Recyclage</h1><p>Contenu du recyclage.</p>';
                break;
            default:
                content.innerHTML = '<h1>Bienvenue</h1><p>Choisissez une catégorie.</p>';
        }
    });
});