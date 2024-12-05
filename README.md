# GeekOfLegends
 

## Configuration du Projet
 

- Créez un repository Github. en PRIVATE
- Utilisez une structure de dossier organisée.
- Commitez avec des noms explicites minimum 25 commits.
- ce projet est un jeu interactif: Utilisez des alert, prompt et console.log
 

## Objectif :
 

- Ce jeu consiste en l'affrontement entre 3 héros, crées et contrôlés par le joueur, contre un boss.

- Le jeu se déroule au “tour par tour” c'est à dire que chaque personnage attaquera à sont tour et celà en boucle jusque l'un des deux camp soit vaincu.

 

## Création des Boss
(à l'aide d'une classe ou d'un objet)

- Créez trois boss : Sauron, Chronos, Lilith.
- Chaque boss a un nom, des points d'attaque ainsi que des points de vie 
- les points d'attaques représente le nombre de dégâts  qu'il infligera aux point de vie d'un héro à chaque attaque. 
- les points de vie représente la santé du boss. si elle tombe à 0, le boss meurt. Pour rappel le but du jeu est de réduire ces point de vie à 0.
- Les points d'attaque et les points de vie de chaque Boss sont différents et a votre bon vouloir.
 

## Création des Héros
 

- Créez 3 héros : un guerrier, un mage, et un archer.
- Chaque héros a un nom, une posture de combat,  des points d'attaque ainsi que des points de vie 
- les points d'attaques représente le nombre de dégâts  qu'il infligera aux point de vie du boss à chaque attaque. 
- les points de vie représente la santé du héro. si elle tombe à 0, le héro est mort.
- la posture de combat peut valoir soit “attaque” , soit “défense” 
- un héro qui attaque alors que sa posture de combat est en “attaque” infligera 20% plus de dégât au boss.
- un héro qui se fait attaquer par le boss alors que sa posture de combat est en “défense” subira que la moitié des dégâts 
 

## Chaque héros possèdent des particularités selon leur rôle.

### Le Guerrier

- Le guerrier possède des points de rage ( initialement à 0 ) 
- Le guerrier gagne 1 point de rage à la fin de chaque tour 
- Lorsque le guerrier attaque, si il possède 4 points de rage, les dégâts qu'il infligera seront augmenté de 25% ce tour ci et ses points de rage redescendent à 0.
 

### Le Mage

- Le mage possède des points de mana ( initialement à 7 ) 
- Les attaques coûtent 2 points de mana.
- Si le mage ne possède pas assez de mana lorsque il doit attaquer, il récupère 7 points de mana au lieu d'infliger des dégâts.
 

### l'Archer

- L'archer possède des flèches (initialement à 6)
- Les attaques coûtent 2 flèches.
- Si L'archer ne possède pas assez de flèche lorsque il doit attaquer, il récupère 6 flèches au lieu d'infliger des dégâts.
 
 
## Déroulement du jeu
 

### Début de jeu
 

- Avant le début du combat, le joueur devra créer les 3 héros

- Il pourra choisir le nom de chaque héros ainsi que la posture de combat initiale.

- Le joueur devra aussi répartir un totale de points de vie et de points d'attaque entre les 3 héros.

exemple :

- 150 points de vie à répartir pour les 3 héros
- 120 points d'attaque à répartir pour les 3 héros
 

notez qu'il faut pouvoir répartir de tel sorte à ce que chaque héros est au moins 1 points de vie.

- Après avoir créer les 3 héros, l'ordinateur choisira (aléatoirement) parmi les 3 boss crées lequel sera dans le combat.

 

### Combat
 

le jeu se déroule en “tour” .

Durant chaque tour, chaque personnage effectuera une action à tour de rôle dans un ordre précis.

- Le Guerrier tentera une attaque contre le boss.
- Le Mage tentera une attaque contre le boss.
- L'Archer tentera une attaque contre le boss.
- Le boss tentera d'attaquer un héro toujours en vie (choisi aléatoirement).
- le joueur pourra changer la posture de combat de chaque héros encore en vie a la fin de chaque tour.
 

Un héro ne peut pas faire d'action si il est mort (point de vie à 0)

Ceci se répète jusque à ce que :

- tout les héros meurent (perdu)
- ou que le boss meurt (gagner)
- ou que les points de vie du boss soient en dessous de 20% (énigme pour les boss)
 

Énigmes pour les Boss

- Quand un boss a 20% de points de vie, l'ordinateur posera une énigme parmi 3 possible (aléatoire).
- Le joueur aura jusque à trois tentative pour répondre correctement.
- Si il y parvient, le boss est vaincu et le joueur gagner la partie.
- Dans le cas contraire, l'équipe des héros est décimée, le joueur a perdu.
 

 

________________________________________________________________________________________________________________

 

## BONUS
 

### Jeu robuste 

il faut que votre code puisse supporter les réponses inattendue de l'utilisateur.
 

### Attaque critique de l'archer 

l'archer aura une chance sur quatre d'infliger une coup critique et de faire plus de dégâts (exemple: + 50% de dégâts)
 

### Faiblesse élémentaire du Mage

- Le Mage utilise désormais un sort élémentaire.
- le mage ainsi que les boss ont désormais un attribut élémentaire qui peut valoir soit:
    - Feu
    - Terre
    - Eau
- L'attribut élémentaire est choisie aléatoirement pour les boss.
- Et le joueur choisira l'attribut élémentaire du mage (durant la création des héros).
- Lorsque le mage attaque, il sera capable d'infliger plus de dégâts (+30%) si sont attribut élémentaire domine celui du boss.

```
Le FEU domine la TERRE
La TERRE domine l'EAU
l'EAU domine le FEU
```

### Scénariser le jeu 

Améliorez les messages dans la console et l'alert pour raconter l'histoire de manière dynamique.

### DOM, soyons fou…

Certain l'ont fait avant vous. Oserez-vous le challenge ? (uniquement si vous avez valider le projet en avance)