// Fonction classique

// function foo(){
//     console.log('hello');
// }
// foo();

// Fonction fléchée (évite le hoisting) / moins lourd dans la synthaxe

// const foo = (a,b) => {
//     return a + b;
// }

// console.log(foo(2,2));

// Fonction fléchée élégante

// const foobar = (a,b) => a + b;

// const bar = a => a;  // Si un seul paramètre, pas besoin de parenthèses.

// console.log(foobar(3,4));

// This dans les objets.

// const myObj = {
//     a: "5",
//     foo() {
//         console.log(this); // contexte appelant, donc l'object
//     },

//     bar: () => {
//         console.log(this); // contexte englobant, donc l'objet Window
//     }
// }

// myObj.foo();

//// SPREAD & REST

//Spread operator
// const arr = [1,2,3];
// console.log(...arr);
// const arr2 = [...arr, 4,5,6];
// console.log(...arr2);

// const myObj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// const myObj2 = {
//     ...myObj,
//     d: 4,
// }

// console.log(myObj2);


// REST operator

// function add (...args) {
    
//     // met tous les arguments dans un tableaux. Si add(a,b,...args), les deux premiers arguments seront a et b, le reste sera mis dans le tableau.

//     let result = 0;
    
//     //for of pour les tableaux, for in pour les objets
//     for(const arg of args){
//         result += arg;
//     }

//     return result
// }

// console.log(add(7,5));

///// LES FONCTIONS PURES

// Ne touche pas à l'environnement externe, renvoit toujours la meme chose si on l'appelle un nombre indéfini de fois. (n'incrémente pas de valeur ou quoi que ce soit)
// Evite les conflits, ne pollue pas d'autres variables.

// Grand pillier de la programmation fonctionnelle. Donc important avec REACT. 

/// Fonction d'ordre supérieure.
// Prend une autre fonction en paramètre, en retourne une autre, ou les deux.
// Permet de faire des actions multiples avec une seule et même fonction. 

// const rawArr = [5,6, 7634, 45, 98374, 210];
// const newArr = [];

// for(let i = 0; i < rawArr.length; i++){
//     if(rawArr[i] > 100){
//         newArr.push(rawArr[i]);
//     }
// }
// console.log(newArr);

// function supArr(arr, fn) {
    
//     const newArr = [];

//     for(let i = 0; i < arr.length; i++){
//             if(fn(arr[i])){
//                 newArr.push(arr[i]);
//             }
//         }  

//     return newArr;
// }
// // Facile à réutiliser
// const arrSup100 = supArr(rawArr, (item) => {
//     if (item > 100) {
//         return item;
//     }
// })

// console.log(arrSup100);


// const arr = [1,2,3,4,5,6];
// const mapedArr = arr.map(x => x +10);
// console.log(mapedArr);

// const filteredArr = arr.filter(num => num > 2);
// console.log(filteredArr);

// arr.forEach(val => {
//     console.log(val - 90);
// })


// Destructuring

// const pays = {
//     nom : "Italie",
//     pop: 60
// }

// const {nom, pop} = pays; 

// console.log(nom, pop); // Italie 60;

// // Fonction fléchée bizarre. On dit qu'on attend comme un argument un objet, et on met le nom de la proporité que l'on veut. Et on returne la valeur de cette propriété.
// const data = ({nom}) => nom;

// console.log(data(pays));


const arr = [1,2,3,4];

const [a,b,c] = arr;

console.log(a,b,c); // 1 2 3

