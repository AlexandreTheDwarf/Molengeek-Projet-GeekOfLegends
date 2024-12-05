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

// Recuperation formulaire : 

// Guerrier

let guerrierNom = document.getElementById("guerrier-nom")
let GNom = guerrierNom.value

let guerrierPosture = document.querySelectorAll('input[name="guerrier-posture"]')
let GPosture = ""
for (let i = 0; i < guerrierPosture.length; i++) {
    if (guerrierPosture[i].checked) {
        GPosture = guerrierPosture[i].value
        break
    }
}

let guerrierAttaque = document.getElementById("guerrier-attaque")
let GAttaque = guerrierAttaque.value

let guerrierVie = document.getElementById("guerrier-vie")
let GVie = guerrierVie.value

// Mage

let mageNom = document.getElementById("mage-nom")
let MNom = mageNom.value

let magePosture = document.querySelectorAll('input[name="mage-posture"]')
let MPosture = ""
for (let i = 0; i < magePosture.length; i++) {
    if (magePosture[i].checked) {
    MPosture = magePosture[i].value
        break
    }
}

let mageAttaque = document.getElementById("mage-attaque")
let MAttaque = mageAttaque.value

let mageVie = document.getElementById("mage-vie")
let MVie = mageVie.value

// Archer

let archerNom = document.getElementById("archer-nom")
let ANom = mageNom.value

let archerPosture = document.querySelectorAll('input[name="archer-posture"]')
let APosture = ""
for (let i = 0; i < archerPosture.length; i++) {
    if (archerPosture[i].checked) {
    MPosture = archerPosture[i].value
        break
    }
}

let archerAttaque = document.getElementById("archer-attaque")
let AAttaque = mageAttaque.value

let archerVie = document.getElementById("archer-vie")
let AVie = mageVie.value

// Déroulement du jeu
 
// Début de jeu


let guerrier = new Guerrier ()
let mage = new Mage()
let archer = new Archer ()