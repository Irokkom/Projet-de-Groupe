class Client {
    nom: string;
    NumTicket: number;
    prioritaire: boolean;

    constructor(nom: string, NumTicket: number, prioritaire: boolean = false) {
        this.nom = nom;
        this.NumTicket = NumTicket;
        this.prioritaire = prioritaire;  
    }
}

class Queue {
    fileNormale: Client[] = [];       
    filePrioritaire: Client[] = [];   
    NumTicket: number = 1;       

    ajouterClient(nom: string, prioritaire: boolean = false): void {
        const client = new Client(nom, this.NumTicket, prioritaire);
        
        if (prioritaire) {
            this.filePrioritaire.push(client);
            console.log(`${client.nom} (Ticket n° ${client.NumTicket}) est ajouté à la file prioritaire.`);
        } else {
            this.fileNormale.push(client);
            console.log(`${client.nom} (Ticket n° ${client.NumTicket}) est ajouté à la file normale.`);
        }
        
        this.NumTicket++;
    }

    retirerClient(): void {
        if (this.filePrioritaire.length > 0) {
            const client = this.filePrioritaire.shift();  
            console.log(`${client?.nom} (Ticket n° ${client?.NumTicket}) a été servi (prioritaire).`);
        }
    else if (this.fileNormale.length > 0) {
        const client = this.fileNormale.shift(); 
        console.log(`${client?.nom} (Ticket n° ${client?.NumTicket}) a été servi.`);
    } 
    else {
        console.log("Il n'y a pas de clients à servir.");
    }
}

afficherEtat(): void {
    console.log("Etat actuel de la file d'attente :");
    console.log("Clients prioritaires :");
    if (this.filePrioritaire.length > 0) {
        this.filePrioritaire.forEach(client => {
            console.log(`Le ${client.nom} avec le ticket numéro ${client.NumTicket})`);
        });
    } else {
        console.log("Aucun client prioritaire.");
    }

    // Affichage des clients normaux
    console.log("Clients normaux :");
    if (this.fileNormale.length > 0) {
        this.fileNormale.forEach(client => {
            console.log(`Le ${client.nom} avec le ticket numéro ${client.NumTicket})`);
        });
    } else {
        console.log("Aucun client normal.");
    }
}
}