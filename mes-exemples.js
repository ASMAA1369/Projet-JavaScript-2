/// 1. Inverser une chaîne 
function inverserChaine(str) {
  // On transforme la chaîne en tableau, on inverse l'ordre puis on recompose la chaîne
  return str.split('').reverse().join('');
}

// Appel avec toute la chaîne à inverser
console.log("Inverser 'bonjour tout le monde' :", inverserChaine('bonjour tout le monde'));

// 2. Compter les caractères dans une chaîne
function compterCaracteres(str) {
  // La propriété length renvoie le nombre de caractères dans la chaîne
  return str.length;
}

const exempleTexte = 'bonjour tout le monde';
console.log(`Nombre de caractères dans '${exempleTexte}' :`, compterCaracteres(exempleTexte));


// 3. Mettre la première lettre de chaque mot en majuscule
function mettreMajusculePremiereLettre(str) {
  // On sépare la phrase en mots, on met la première lettre en majuscule pour chaque mot, puis on recompose la phrase
  return str
    .split(' ')
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(' ');
}
console.log("Première lettre en majuscule :", mettreMajusculePremiereLettre('bonjour tout le monde'));

// 4. Trouver la valeur maximale dans un tableau de nombres
function trouverMax(tab) {
  // Utilisation de Math.max avec l'opérateur spread pour obtenir le maximum du tableau
  return Math.max(...tab);
}
console.log("Max dans [3,9,2,15,6] :", trouverMax([3, 9, 2, 15, 6]));

// 5. Trouver la valeur minimale dans un tableau de nombres
function trouverMin(tab) {
  // Idem pour le minimum avec Math.min
  return Math.min(...tab);
}
console.log("Min dans [3,9,2,15,6] :", trouverMin([3, 9, 2, 15, 6]));

// 6. Calculer la somme de tous les éléments d'un tableau
function sommeTableau(tab) {
  // La méthode reduce additionne tous les éléments du tableau
  return tab.reduce((acc, val) => acc + val, 0);
}
console.log("Somme de [3,9,2,15,6] :", sommeTableau([3, 9, 2, 15, 6]));

// 7. Filtrer les éléments d’un tableau selon une condition donnée
function filtrerTableau(tab, condition) {
  // Le paramètre condition est une fonction qui détermine si un élément doit être conservé
  return tab.filter(condition);
}
// Exemple : filtrer les nombres strictement supérieurs à 5
console.log("Filtrer > 5 dans [3,9,2,15,6] :", filtrerTableau([3, 9, 2, 15, 6], x => x > 5));

// 8. Calculer la factorielle d'un nombre
function factorielle(n) {
  // La factorielle n'existe pas pour les nombres négatifs, on retourne undefined
  if (n < 0) return undefined;
  // 0! et 1! valent 1
  if (n === 0 || n === 1) return 1;
  let resultat = 1;
  // On multiplie tous les entiers de 2 à n
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}
console.log("Factorielle de 5 :", factorielle(5));

// 9. Vérifier si un nombre est premier
function estPremier(n) {
  if (n <= 1) return false;          // Les nombres <=1 ne sont pas premiers
  if (n <= 3) return true;           // 2 et 3 sont premiers
  if (n % 2 === 0 || n % 3 === 0) return false; // Divisible par 2 ou 3 => pas premier

  // Test des diviseurs de la forme 6k ± 1 jusqu'à sqrt(n)
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
console.log("Est-ce que 17 est premier ? :", estPremier(17));
console.log("Est-ce que 18 est premier ? :", estPremier(18));

// 10. Générer la suite de Fibonacci jusqu'à n termes
function suiteFibonacci(n) {
  if (n <= 0) return [];    // Pas de termes à générer
  if (n === 1) return [0];  // La suite commence par 0
  let fib = [0, 1];         // Initialisation avec les deux premiers termes
  // On ajoute les termes suivants en sommant les deux derniers
  while (fib.length < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}
console.log("Suite Fibonacci (7 termes) :", suiteFibonacci(7));

