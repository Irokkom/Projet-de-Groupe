const mots: string[] = ["becane", "sardine", "brancher", "bigo", "gere"];
const motAtrouver: string = mots[Math.floor(Math.random() * mots.length)];

let motAffiche: string[] = [];
for (let i = 0; i < motAtrouver.length; i++) {
    motAffiche.push("_");
}

let erreurs: number = 0;
const maxErreurs: number = 6;

console.log("Mot à deviner :", motAffiche.join(" "));

while (erreurs < maxErreurs && motAffiche.includes("_")) {
    const lettre: string = prompt("Entrez une lettre :")?.toLowerCase() || "";

    let lettreTrouvee: boolean = false;
    for (let i = 0; i < motAtrouver.length; i++) {
        if (motAtrouver[i] === lettre) {
            motAffiche[i] = lettre;
            lettreTrouvee = true;
        }
    }

    if (!lettreTrouvee) {
        erreurs++;
        console.log("Lettre incorrecte. Vous avez fait", erreurs, "erreur(s).");
    }

    console.log(motAffiche.join(" "));
}

if (!motAffiche.includes("_")) {
    console.log("Félicitations ! Vous avez deviné le mot :", motAffiche.join(""));
} else {
    console.log("Désolé, vous avez perdu. Le mot était :", motAtrouver);
}
