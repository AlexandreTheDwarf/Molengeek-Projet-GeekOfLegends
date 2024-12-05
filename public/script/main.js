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