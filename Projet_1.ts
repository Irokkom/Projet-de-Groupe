function salut (str: string): string{
    return(str);
}

function genererMotDePasse(longueur: number, inclureMajuscules: boolean, inclureChiffres: boolean, inclureSymboles: boolean): string{
    const lettresMinuscules = 'abcdefghijklmnopqrstuvwxyz';
    const lettresMajuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const chiffres = '0123456789';
    const symboles = '!@#$%^&*()_+[]{}|;:,.<>?';

    let caracteresDisponibles = lettresMinuscules;
}