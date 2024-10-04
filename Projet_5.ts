
function creerPlateau(n: number): string[] {
    let plateau: string[] = new Array(n).fill('simple'); 
    plateau[3] = 'avancer';  
    plateau[7] = 'reculer';
    plateau[15] = 'gagneTour';
    return plateau;
}

function lancerDes(): number {
    return Math.floor(Math.random() * 6) + 1;
}

function deplacerJoueur(joueur: number, de: number, plateau: string[]): number {
    let nouvellePosition = joueur + de;

    if (nouvellePosition >= plateau.length) {
        console.log("Le joueur a gagné !");
        return plateau.length - 1; 
    }

    switch (plateau[nouvellePosition]) {
        case 'avancer':
            console.log("Le joueur avance de 2 cases supplémentaires !");
            nouvellePosition += 2;
            break;
        case 'reculer':
            console.log("Le joueur recule de 1 case !");
            nouvellePosition -= 1;
            break;
        case 'gagneTour':
            console.log("Le joueur gagne un tour supplémentaire !");
            break;
    }

    return nouvellePosition;
}

function jouerPartie(plateau: string[], joueurs: number[]): void {
    let tour = 0;
    let jeuEnCours = true;

    while (jeuEnCours) {
        const joueurActuel = tour % joueurs.length; 
        const de = lancerDes();
        console.log(`Joueur ${joueurActuel + 1} lance un dé : ${de}`);

        joueurs[joueurActuel] = deplacerJoueur(joueurs[joueurActuel], de, plateau);
        console.log(`Position du joueur ${joueurActuel + 1} : ${joueurs[joueurActuel]}`);

        if (joueurs[joueurActuel] === plateau.length - 1) {
            console.log(`Joueur ${joueurActuel + 1} a gagné !`);
            jeuEnCours = false;  
        }

        tour++;
    }
}


let joueurs = [0, 0]; 

const plateau = creerPlateau(20);
jouerPartie(plateau, joueurs);

