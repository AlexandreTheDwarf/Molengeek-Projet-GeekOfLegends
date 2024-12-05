// Création des Boss

class Boss {
    constructor(nom, attaque, vie){
        this.nom = nom
        this.attaque = attaque
        this.vie = vie
    }
}

let Sauron = new Boss ("Sauron", 15, 300)
let Chronos = new Boss ("Chronos", 10, 400)
let Lilith = new Boss ("Lilith", 20, 200)

let boos = [Sauron, Chronos, Lilith]

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
    }
}

class Mage extends Heros {
    constructor(nom, posture, attaque, vie, mana){
        super(nom, posture, attaque, vie)
        this.mana = mana
    }
}

class Archer extends Heros {
    constructor(nom, posture, attaque, vie, fleche){
        super(nom, posture, attaque, vie)
        this.fleche = fleche
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
    let guerrier = new Guerrier(GNom, GPosture, GAttaque, GVie, 0);
    let mage = new Mage(MNom, MPosture, MAttaque, MVie, 7);
    let archer = new Archer(ANom, APosture, AAttaque, AVie, 6);

    console.log(guerrier);
    console.log(mage);
    console.log(archer);
});





