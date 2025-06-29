// ===== Fonctions de manipulation de chaînes =====

// 1. Inverser une chaîne
function inverserChaine(str) {
  return str.split('').reverse().join('');
}

// 2. Compter les caractères dans une chaîne
function compterCaracteres(str) {
  return str.length;
}

// 3. Mettre la première lettre de chaque mot en majuscule
function mettreMajusculePremiereLettre(str) {
  return str
    .split(' ')
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(' ');
}


// ===== Fonctions de tableau =====

// 4. Trouver la valeur maximale dans un tableau de nombres
function trouverMax(tab) {
  return Math.max(...tab);
}

// 5. Trouver la valeur minimale dans un tableau de nombres
function trouverMin(tab) {
  return Math.min(...tab);
}

// 6. Calculer la somme de tous les éléments d'un tableau
function sommeTableau(tab) {
  return tab.reduce((acc, val) => acc + val, 0);
}

// 7. Filtrer les éléments d’un tableau selon une condition donnée
// La condition est une fonction callback passée en argument
function filtrerTableau(tab, condition) {
  return tab.filter(condition);
}


// ===== Fonctions mathématiques =====

// 8. Calculer la factorielle d'un nombre
function factorielle(n) {
  if (n < 0) return undefined; // factorielle non définie pour négatifs
  if (n === 0 || n === 1) return 1;
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

// 9. Vérifier si un nombre est premier
function estPremier(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// 10. Générer la suite de Fibonacci jusqu'à n termes
function suiteFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let fib = [0, 1];
  while (fib.length < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}


// ==== Exemple d'utilisation ====

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
