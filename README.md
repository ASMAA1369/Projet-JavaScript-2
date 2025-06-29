# Projet JavaScript : Fonctions de manipulation de chaînes, tableaux et mathématiques

## Description

Ce projet contient plusieurs fonctions JavaScript implémentant des opérations courantes sur les chaînes de caractères, les tableaux et les nombres. Un projet pour mettre en pratique l'écriture de fonctions, la manipulation des données et les concepts de base en programmation.

---

## Fonctions incluses

### Manipulation de chaînes

1. **inverserChaine(str)**  
   Inverse tous les caractères d'une chaîne donnée.

2. **compterCaracteres(str)**  
   Compte le nombre de caractères dans une chaîne.

3. **mettreMajusculePremiereLettre(str)**  
   Met la première lettre de chaque mot d'une phrase en majuscule.

---

### Fonctions sur tableaux

4. **trouverMax(tab)**  
   Trouve la valeur maximale dans un tableau de nombres.

5. **trouverMin(tab)**  
   Trouve la valeur minimale dans un tableau de nombres.

6. **sommeTableau(tab)**  
   Calcule la somme de tous les éléments d'un tableau.

7. **filtrerTableau(tab, condition)**  
   Filtre les éléments d’un tableau selon une condition passée en paramètre (fonction callback).

---

### Fonctions mathématiques

8. **factorielle(n)**  
   Calcule de la factorielle d'un nombre donné (n!).

9. **estPremier(n)**  
   Vérification si un nombre est premier ou non.

10. **suiteFibonacci(n)**  
    Génèration de la suite de Fibonacci jusqu'à `n` termes.

---

## Exemple d'utilisation

```javascript
//Fonctions de manipulation de chaînes

console.log(inverserChaine("Bonjour tout le monde")); // ruojnoBednom el tuot ruojnob
console.log(compterCaracteres("Bonjourtout le monde")); // 21
console.log(mettreMajusculePremiereLettre("bonjour tout le monde")); // Bonjour Tout Le Monde

//Fonctions de tableau = [5, 3, 9, 1, 7];

console.log(trouverMax(tableau)); // 15
console.log(trouverMin(tableau)); // 2
console.log(sommeTableau(tableau)); // 35
console.log(filtrerTableau(tableau, x => x > 5)); // [9, 15, 6]

//Fonctions mathématiques

console.log(factorielle(5)); // 120
console.log(estPremier(17)); // true
console.log(estPremier(18)); // false
console.log(suiteFibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

## Comment exécuter
Vueillez Ouvrir le fichier HTML dans un navigateur pour voir les résultats affichés.

## Auteur
ASMAA1369

