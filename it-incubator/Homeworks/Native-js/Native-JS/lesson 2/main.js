const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// const myFind = (arraySrc, myFind) => {
//     for (let i = 0; i < arraySrc.length; i++) {
//         if (myFind(arraySrc[i])) {
//             return arraySrc[i]
//         }
//     }
// }
//
// console.log(myFind(students, s => s.isMarried === false))

// const myMap = (arraySrc, mapFn) => {
//     const newArray = []
//     for (let i = 0; i < arraySrc.length; i++) {
//         newArray[i] = mapFn(arraySrc[i])
//     }
//     return newArray;
// }
//
// console.log(myMap(students, s => s.scores + 100))

// const myFilter = (arraySrc, filterFn) => {
//     const newArray = []
//     for (let i = 0; i < arraySrc.length; i++) {
//         if (filterFn(arraySrc[i])) {
//             newArray.push(arraySrc[i])
//         }
//     }
//     return newArray;
// }
//
// console.log(myFilter(students, s => s.scores < 100))

// const myFind = (arraySrc, findFn) => {
//     for (let i = 0; i < arraySrc.length; i++) {
//         if (findFn(arraySrc[i])){
//             return arraySrc[i];
//         }
//     }
// }
//
// console.log(myFind(students, s => s.scores === 120))

// const myReverse = (arraySrc) => {
//     const newArray = []
//     for (let i = 0; i < arraySrc.length; i++) {
//         if (arraySrc[i]){
//             newArray.unshift(arraySrc[i]);
//         }
//     }
//     return newArray;
// }
//
// console.log(myReverse(students))