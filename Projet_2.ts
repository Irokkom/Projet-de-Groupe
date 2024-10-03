function analyseTexte(texte: string): void {
    const nombreMots = compterMots(texte);
    const nombrePhrases = compterPhrases(texte);
    const frequenceLettres = compterFrequenceLettres(texte);
    const motsUtilises = compterMotUtilises(texte);

    console.log(`Nombre de mots : ${nombreMots}`);
    console.log(`Nombre de phrases : ${nombrePhrases}`);

    console.log("Fréquence des lettres :");
    for (const lettre in frequenceLettres) {
        console.log(`${lettre} : ${frequenceLettres[lettre]}`);
    }

    console.log("Mots les plus utilisés :");
    for (const mot in motsUtilises) {
        console.log(`${mot} : ${motsUtilises[mot]}`);
    }
}

function compterMots(texte: string): number {
    const mots = texte.trim().split(/\s+/);
    return mots.length;
}

function compterPhrases(texte: string): number {
    const phrases = texte.split(/[.!?]+/);
    return phrases.filter(phrase => phrase.trim() !== "").length;  // Ignorer les chaînes vides
}

function compterFrequenceLettres(texte: string): { [key: string]: number } {
    const frequence: { [key: string]: number } = {};
    const texteSansEspaces = texte.replace(/\s+/g, '').toLowerCase();

    for (const lettre of texteSansEspaces) {
        if (/[a-zA-Z]/.test(lettre)) {
            frequence[lettre] = (frequence[lettre] || 0) + 1;
        }
    }
    return frequence;
}

function compterMotUtilises(texte: string): { [key: string]: number } {
    const frequenceMots: { [key: string]: number } = {};
    const mots = texte.toLowerCase().split(/\s+/);

    for (const mot of mots) {
        if (mot) {
            frequenceMots[mot] = (frequenceMots[mot] || 0) + 1;
        }
    }
    return frequenceMots;
}

const texte = "Bonjour c'est une phrase de test. C'est un autre exemple.";
analyseTexte(texte);
