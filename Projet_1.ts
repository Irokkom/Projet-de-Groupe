function genererMotDePasseAleatoire(longueur: number, inclureMajuscules: boolean, inclureChiffres: boolean, inclureSymboles: boolean): string {
    const lettresMinuscules = 'abcdefghijklmnopqrstuvwxyz';
    const lettresMajuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const chiffres = '0123456789';
    const symboles = '!@#$%^&*()_+[]{}|;:,.<>?';

    let caracteresDisponibles = lettresMinuscules; // Commence avec les lettres minuscules

    // Ajouter les caractères supplémentaires selon les options choisies par l'utilisateur
    if (inclureMajuscules) {
        caracteresDisponibles += lettresMajuscules;
    }
    if (inclureChiffres) {
        caracteresDisponibles += chiffres;
    }
    if (inclureSymboles) {
        caracteresDisponibles += symboles;
    }

    let motDePasse = '';

    // Générer le mot de passe aléatoire en mélangeant les caractères disponibles
    for (let i = 0; i < longueur; i++) {
        const indexAleatoire = Math.floor(Math.random() * caracteresDisponibles.length);
        motDePasse += caracteresDisponibles[indexAleatoire];
    }

    return motDePasse; // Retourner le mot de passe généré
}

// Exemple d'utilisation
const longueur = parseInt(prompt("Entrez la longueur du mot de passe : ") || '8', 10); // Longueur par défaut à 8
const inclureMajuscules = confirm("Voulez-vous inclure des majuscules ?"); // Booléen pour majuscules
const inclureChiffres = confirm("Voulez-vous inclure des chiffres ?"); // Booléen pour chiffres
const inclureSymboles = confirm("Voulez-vous inclure des symboles ?"); // Booléen pour symboles

// Générer le mot de passe
const motDePasse = genererMotDePasseAleatoire(longueur, inclureMajuscules, inclureChiffres, inclureSymboles);

// Afficher le mot de passe dans la console
console.log("Mot de passe généré :", motDePasse);
alert("Votre mot de passe généré est : " + motDePasse);
