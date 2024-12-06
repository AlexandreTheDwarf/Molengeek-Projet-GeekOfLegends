// Bonus : 

// Récupère l'élément audio et son source
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");

// Fonction pour changer la source et jouer le son
function playSound(soundFile) {
    audioSource.src = soundFile; // Change la source du son
    audioPlayer.load();           // Recharge l'élément audio avec la nouvelle source
    audioPlayer.play();           // Joue le son
}

function endGame(result) {
    if (result === "win") {
        console.log("Félicitations, les héros ont gagné !");
        playSound("./public/sound/victory.mp3");
    } else if (result === "lose") {
        console.log("Tous les héros sont morts, le boss a gagné !");
        playSound("./public/sound/finish.mp3");
    }

    heros = [];
    boss.forEach(b => b.vie = 0); 
}


// Création des Boss

class Boss {
    constructor(nom, attaque, vie) {
        this.nom = nom;
        this.attaque = attaque;
        this.vie = vie;
        this.vieInitiale = vie; // Stocke la vie maximale pour les calculs
    }

    async attack() { 
        if (heros.length > 0) {
            // Vérifie si la vie est à 25% ou moins
            if (this.vie <= this.vieInitiale * 0.25) {
                alert(`${this.nom} n'a plus beaucoup de points de vie, il pose un ultimatum.`);
                let answer = prompt(
                    "Jamais je ne suis loin de mon autre jumelle. On m'associe souvent, au parfum vomitif. D'une partie du corps pas vraiment belle. Localisée fort loin de l'organe olfactif ? Qui suis-je ?"
                );
                answer = answer.toLowerCase();
                if (answer === "chaussette" || answer === "chaussettes") {
                    this.vie = 0; // Le boss est vaincu
                    console.log(`L'énigme a été résolue, ${this.nom} a été vaincu.`);
                    await sleep(5000);
                    endGame("win"); // Ajoute une fonction pour signaler la fin
                    return;
                }else {
                    console.log(`Ce n'est pas la bonne réponse, adieu. ${this.nom} utilise "Mort de masse".`);
                    await sleep(5000); 
                    heros = []; 
                }
                return; // Arrête l'attaque si l'ultimatum est déclenché
            } else {
                // Sélection aléatoire d'un héros
                let targetIndex = Math.floor(Math.random() * heros.length);
                let target = heros[targetIndex];

                if (target.posture == "defense"){
                    // Calcul des dégâts infligés par le boss
                    let dmg = this.attaque / 2;
                    target.vie -= dmg;
                    console.log(`${this.nom} attaque ${target.nom} pour ${dmg} dégâts.`);
                    playSound("./public/sound/hadouken.mp3");
                }else{
                    // Calcul des dégâts infligés par le boss
                    let dmg = this.attaque;
                    target.vie -= dmg;
                    console.log(`${this.nom} attaque ${target.nom} pour ${dmg} dégâts.`);
                    playSound("./public/sound/hadouken.mp3");
                }

                // Vérifie si le héros est mort
                if (target.vie <= 0) {
                    console.log(`${target.nom} est mort au combat.`);
                    await sleep(5000); 
                    heros = heros.filter(h => h.vie > 0); // Retire les héros morts
                }
            }
        } else {
            console.log("Tous les héros sont morts, le boss a gagné !");
        }
    }
}


let Sauron = new Boss ("Sauron", 35, 300)
let Chronos = new Boss ("Chronos", 25, 400)
let Lilith = new Boss ("Lilith", 40, 200)

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
        this.attack = (boss) =>{
            if (this.vie > 1){
                if(this.posture == "attaque"){
                    if (this.rage < 4){
                        let dmg = this.attaque * 1.2
                        boss.vie = boss.vie - dmg
                        console.log(`${this.nom} a attaqué ${boss.nom} pour un total de ${dmg}`)
                        playSound("./public/sound/sword.mp3");
                        this.rage += 1
                    }
                    else{
                        let dmg = this.attaque * 1.2 * 1.25
                        boss.vie = boss.vie - dmg
                        console.log(`${this.nom} est enragé, il attaque ${boss.nom} pour un total de ${dmg}`)
                        playSound("./public/sound/sword.mp3");
                        this.rage = 0
                    }
                }
                else{
                    if (this.rage < 4){
                        let dmg = this.attaque 
                        boss.vie = boss.vie - dmg
                        console.log(`${this.nom} a attaqué ${boss.nom} pour un total de ${dmg}`)
                        playSound("./public/sound/sword.mp3");
                        this.rage += 1
                    }
                    else{
                        let dmg = this.attaque * 1.25
                        boss.vie = boss.vie - dmg
                        console.log(`${this.nom} est enragé, il attaque ${boss.nom} pour un total de ${dmg}`)
                        playSound("./public/sound/sword.mp3");
                        this.rage = 0
                    }
                }
            }
            else{
                console.log(`${this.nom} est mort, il ne peut donc plus se battre`)
                playSound("./public/sound/mort.mp3");
                heros = heros.filter(h => h.vie > 0);
            }
            
        }
    }
}

class Mage extends Heros {
    constructor(nom, posture, attaque, vie, mana){
        super(nom, posture, attaque, vie)
        this.mana = mana
        this.attack = (boss) =>{
            if (this.vie > 1){
                if(this.posture == "attaque"){
                    if (this.mana>=2){
                        let dmg = this.attaque * 1.2
                        boss.vie = boss.vie - dmg
                        console.log(`${this.nom} a attaqué ${boss.nom} pour un total de ${dmg}`)
                        playSound("./public/sound/fireball.mp3");
                        this.mana -= 2
                    }
                    else{
                        console.log(`${this.nom} n'a plus de mana, il se regenere de 7`)
                        playSound("./public/sound/mana.mp3");
                        this.mana += 7
                    }
                }
                else{
                    if (this.mana>=2){
                        let dmg = this.attaque
                        boss.vie = boss.vie - dmg
                        console.log(`${this.nom} a attaqué ${boss.nom} pour un total de ${dmg}`)
                        playSound("./public/sound/fireball.mp3");
                        this.mana -= 2
                    }
                    else{
                        console.log(`${this.nom} n'a plus de mana, il se regenere de 7`)
                        playSound("./public/sound/mana.mp3");
                        this.mana += 7
                    }
                }
            }
            else{
                console.log(`${this.nom} est mort, il ne peut donc plus se battre`)
                playSound("./public/sound/mort.mp3");
                heros = heros.filter(h => h.vie > 0);
            }
            
        }
    }
}

class Archer extends Heros {
    constructor(nom, posture, attaque, vie, fleche){
        super(nom, posture, attaque, vie)
        this.fleche = fleche
        this.attack = (boss) =>{
            if (this.vie > 1){
                if (Math.random() < 0.25){
                    if(this.posture == "attaque"){
                        if (this.fleche>=2){
                            let dmg = this.attaque * 1.2 * 1.50
                            boss.vie = boss.vie - dmg
                            console.log(`${this.nom} a attaqué ${boss.nom} pour un total de ${dmg}`)
                            playSound("./public/sound/arrow.mp3");
                            this.fleche -= 2
                        }
                        else{
                            console.log(`${this.nom} n'a plus de fleche, il en fabrique 6`)
                            playSound("./public/sound/craft.mp3");
                            this.fleche += 6
                        }
                    }
                    else{
                        if (this.fleche>=2){
                            let dmg = this.attaque * 1.50
                            boss.vie = boss.vie - dmg
                            console.log(`${this.nom} a attaqué ${boss.nom} pour un total de ${dmg}`)
                            playSound("./public/sound/arrow.mp3");
                            this.fleche -= 2
                        }
                        else{
                            console.log(`${this.nom} n'a plus de fleche, il en fabrique 6`)
                            playSound("./public/sound/craft.mp3");
                            this.fleche += 6
                        }
                    }
                }
                else{
                    if(this.posture == "attaque"){
                        if (this.fleche>=2){
                            let dmg = this.attaque * 1.2
                            boss.vie = boss.vie - dmg
                            console.log(`${this.nom} a attaqué ${boss.nom} pour un total de ${dmg}`)
                            playSound("./public/sound/arrow.mp3");
                            this.fleche -= 2
                        }
                        else{
                            console.log(`${this.nom} n'a plus de fleche, il en fabrique 6`)
                            playSound("./public/sound/craft.mp3");
                            this.fleche += 6
                        }
                    }
                    else{
                        if (this.fleche>=2){
                            let dmg = this.attaque
                            boss.vie = boss.vie - dmg
                            console.log(`${this.nom} a attaqué ${boss.nom} pour un total de ${dmg}`)
                            playSound("./public/sound/arrow.mp3");
                            this.fleche -= 2
                        }
                        else{
                            console.log(`${this.nom} n'a plus de fleche, il en fabrique 6`)
                            playSound("./public/sound/craft.mp3");
                            this.fleche += 6
                        }
                    }
                } 
            }
            else{
                console.log(`${this.nom} est mort, il ne peut donc plus se battre`)
                playSound("./public/sound/mort.mp3");
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

    // Validation que la somme des attaques et des vies ne dépasse pas les limites
    let totalAttaque = GAttaque + MAttaque + AAttaque;
    let totalVie = GVie + MVie + AVie;

    // Vérifie que les totaux respectent les limites
    if (totalAttaque > 120 || totalVie > 150) {
        alert("Le total des attaques ne doit pas dépasser 120 points et le total des vies ne doit pas dépasser 150 points.");
        return; // Arrêter la soumission du formulaire si ça dépasse la limite
    }

    if (GNom == "" || GAttaque == "" || GVie == "" || MNom == "" || MAttaque == "" || MVie == "" || ANom == "" || AAttaque == "" || AVie == "" ){
        alert("Une des valeurs manquantes");
        return; // Arrêter la soumission du formulaire si ça dépasse la limite
    }

    // Création des objets
    let guerrier = new Guerrier(GNom, GPosture, GAttaque, GVie, "0");
    let mage = new Mage(MNom, MPosture, MAttaque, MVie, "1");
    let archer = new Archer(ANom, APosture, AAttaque, AVie, "2");

    // Ajout des héros à l'array
    heros.push(guerrier);
    heros.push(mage);
    heros.push(archer);

    console.log(heros);

    let form = document.getElementById("createForm");
    form.classList.add("hidden");

    // Lancer le jeu
    game();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // Fonction pour attendre "ms" millisecondes
}

async function game() {
    let bossGame = boss[Math.floor(Math.random() * boss.length)];

    do {
        // Les héros attaquent
        for (let element of heros) {
            await element.attack(bossGame);
            await sleep(5000);
        }

        // Vérifie si le boss est mort
        if (bossGame.vie <= 0) {
            endGame("win");
            break;
        } 
        // Vérifie si tous les héros sont morts
        else if (heros.length <= 0) {
            endGame("lose");
            break;
        }
        else {
            // Le boss attaque
            await bossGame.attack();
            await sleep(5000);
        }
    } while (heros.length > 0 && bossGame.vie > 0);
}








