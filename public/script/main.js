// Création des Boss

class Boss {
    constructor(nom, attaque, vie){
        this.nom = nom
        this.attaque = attaque
        this.vie = vie
        this.attack = () => {
            if (heros.length > 0) {
                // Sélection aléatoire d'un héros
                let targetIndex = Math.floor(Math.random() * heros.length);
                let target = heros[targetIndex];
        
                // Calcul des dégâts infligés par le boss
                let dmg = this.attaque;
                target.vie -= dmg;
        
                console.log(`${this.nom} attaque ${target.nom} pour ${dmg} dégâts.`);
                
                // Vérifie si le héros est mort
                if (target.vie <= 0) {
                    console.log(`${target.nom} est mort au combat.`);
                    heros = heros.filter(h => h.vie > 0); // Retire les héros morts
                }
            } else {
                console.log("Tous les héros sont morts, le boss a gagné !");
            }
        }
    }
}

let Sauron = new Boss ("Sauron", 15, 300)
let Chronos = new Boss ("Chronos", 10, 400)
let Lilith = new Boss ("Lilith", 20, 200)

let boss = [Sauron, Chronos, Lilith]

let heros = []

// Création des Héros

class Heros {
    constructor(nom, posture, attaque, vie){
        this.nom = nom
        this.posture = posture
        this.attaque = attaque
        this.vie = vie
    }
}

class Guerrier extends Heros {
    constructor(nom, posture, attaque, vie, rage){
        super(nom, posture, attaque, vie)
        this.rage = rage
        this.attack = () =>{
            if (this.vie > 1){
                if(this.posture == "attaque"){
                    if (rage<4){
                        let dmg = this.attaque * 1.2
                        Boss.vie = Boss.vie - dmg
                        console.log(`${this.nom} a attaqué ${Boss.nom} pour un total de ${this.dmg}`)
                        this.rage += 1
                    }
                    else{
                        let dmg = this.attaque * 1.2 * 1.25
                        Boss.vie = Boss.vie - dmg
                        console.log(`${this.nom} est enragé, il attaque ${Boss.nom} pour un total de ${this.dmg}`)
                        rage = 0
                    }
                }
                else{
                    if (rage<4){
                        let dmg = this.attaque 
                        Boss.vie = Boss.vie - dmg
                        console.log(`${this.nom} a attaqué ${Boss.nom} pour un total de ${this.dmg}`)
                        this.rage += 1
                    }
                    else{
                        let dmg = this.attaque * 1.25
                        Boss.vie = Boss.vie - dmg
                        console.log(`${this.nom} est enragé, il attaque ${Boss.nom} pour un total de ${this.dmg}`)
                        rage = 0
                    }
                }
            }
            else{
                console.log(`${this.nom} est mort, il ne peut donc plus se battre`)
                heros = heros.filter(h => h.vie > 0);
            }
            
        }
    }
}

class Mage extends Heros {
    constructor(nom, posture, attaque, vie, mana){
        super(nom, posture, attaque, vie)
        this.mana = mana
        this.attack = () =>{
            if (this.vie > 1){
                if(this.posture == "attaque"){
                    if (mana=>2){
                        let dmg = this.attaque * 1.2
                        Boss.vie = Boss.vie - dmg
                        console.log(`${this.nom} a attaqué ${Boss.nom} pour un total de ${this.dmg}`)
                        this.mana -= 2
                    }
                    else{
                        console.log(`${this.nom} n'a plus de mana, il se regenere de 7`)
                        this.mana += 7
                    }
                }
                else{
                    if (mana=>2){
                        let dmg = this.attaque
                        Boss.vie = Boss.vie - dmg
                        console.log(`${this.nom} a attaqué ${Boss.nom} pour un total de ${this.dmg}`)
                        this.mana -= 2
                    }
                    else{
                        console.log(`${this.nom} n'a plus de mana, il se regenere de 7`)
                        this.mana += 7
                    }
                }
            }
            else{
                console.log(`${this.nom} est mort, il ne peut donc plus se battre`)
                heros = heros.filter(h => h.vie > 0);
            }
            
        }
    }
}

class Archer extends Heros {
    constructor(nom, posture, attaque, vie, fleche){
        super(nom, posture, attaque, vie)
        this.fleche = fleche
        this.attack = () =>{
            if (this.vie > 1){
                if (Math.random(1,4) == 4){
                    if(this.posture == "attaque"){
                        if (fleche=>2){
                            let dmg = this.attaque * 1.2 * 1.50
                            Boss.vie = Boss.vie - dmg
                            console.log(`${this.nom} a attaqué ${Boss.nom} pour un total de ${this.dmg}`)
                            this.fleche -= 2
                        }
                        else{
                            console.log(`${this.nom} n'a plus de fleche, il en fabrique 6`)
                            this.fleche += 6
                        }
                    }
                    else{
                        if (fleche=>2){
                            let dmg = this.attaque * 1.50
                            Boss.vie = Boss.vie - dmg
                            console.log(`${this.nom} a attaqué ${Boss.nom} pour un total de ${this.dmg}`)
                            this.fleche -= 2
                        }
                        else{
                            console.log(`${this.nom} n'a plus de mana, il se regenere de 7`)
                            this.fleche += 7
                        }
                    }
                }
                else{
                    if(this.posture == "attaque"){
                        if (fleche=>2){
                            let dmg = this.attaque * 1.2
                            Boss.vie = Boss.vie - dmg
                            console.log(`${this.nom} a attaqué ${Boss.nom} pour un total de ${this.dmg}`)
                            this.fleche -= 2
                        }
                        else{
                            console.log(`${this.nom} n'a plus de fleche, il en fabrique 6`)
                            this.fleche += 6
                        }
                    }
                    else{
                        if (fleche=>2){
                            let dmg = this.attaque
                            Boss.vie = Boss.vie - dmg
                            console.log(`${this.nom} a attaqué ${Boss.nom} pour un total de ${this.dmg}`)
                            this.fleche -= 2
                        }
                        else{
                            console.log(`${this.nom} n'a plus de mana, il se regenere de 7`)
                            this.fleche += 7
                        }
                    }
                } 
            }
            else{
                console.log(`${this.nom} est mort, il ne peut donc plus se battre`)
                heros = heros.filter(h => h.vie > 0);
            }
            
        }
    }
}


// Déroulement du jeu
 
// Début de jeu

// Recuperation formulaire : 

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs pour chaque héros
    let GNom = document.getElementById("guerrier-nom").value;
    let GPosture = document.querySelector('input[name="guerrier-posture"]:checked').value;
    let GAttaque = parseInt(document.getElementById("guerrier-attaque").value, 10);
    let GVie = parseInt(document.getElementById("guerrier-vie").value, 10);

    let MNom = document.getElementById("mage-nom").value;
    let MPosture = document.querySelector('input[name="mage-posture"]:checked').value;
    let MAttaque = parseInt(document.getElementById("mage-attaque").value, 10);
    let MVie = parseInt(document.getElementById("mage-vie").value, 10);

    let ANom = document.getElementById("archer-nom").value;
    let APosture = document.querySelector('input[name="archer-posture"]:checked').value;
    let AAttaque = parseInt(document.getElementById("archer-attaque").value, 10);
    let AVie = parseInt(document.getElementById("archer-vie").value, 10);

    // Création des objets
    let guerrier = new Guerrier(GNom, GPosture, GAttaque, GVie, "0");
    let mage = new Mage(MNom, MPosture, MAttaque, MVie, "7");
    let archer = new Archer(ANom, APosture, AAttaque, AVie, "6");

    heros.push(guerrier)
    heros.push(mage)
    heros.push(archer)

    console.log(heros);

    game()
});


function game() {
    let bossGame = boss[Math.floor(Math.random() * boss.length)];

    do {
        // Les héros attaquent
        heros.forEach(element => {
            element.attack();
        });

        // Vérifie si le boss est mort
        if (bossGame.vie <= 0) {
            console.log(`${bossGame.nom} est mort, les héros ont gagné !`);
            break; // On arrête la boucle si le boss est mort
        }
        else{
            // Le boss attaque
            bossGame.attack();
        } 

    } while (heros.length > 0 && bossGame.vie > 0); // Continue tant que les héros sont vivants et que le boss n'est pas mort
}






