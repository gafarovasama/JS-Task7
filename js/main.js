
//? change date format ?//
let operator1 = prompt("Birinci operatoru daxil edin")
let operator2 = prompt("Ikinci operatoru daxil edin")

const date = `2003${operator1}06${operator1}08`
console.log("Ilk format >>>", date)

const changeDateFormat = (date) => {
    let totalSalary = date.split(operator1).reverse().join(operator2);
    console.log("Deyisdirilmis format >>", totalSalary);
}
changeDateFormat(date)


//* use reduce reduce () 3 object *//

// let users = [
//     {name: "Sema", salary: 1600},
//     {name: "Semra", salary: 1800},
//     {name: "Elvin", salary: 1400}
// ];

// let totalSalary = users.reduce((total, value) => total + value.salary, 0);
// console.log("Umumi emek haqqi >>>", totalSalary);



//! ferqli olani tap !//
// let a = [1, 2, 3, 4, 5];
// let b = [1, 2, 3, 4, 5, 6];

// let sum1 = a.reduce((acc, value) => acc + value, 0);
// let sum2 = b.reduce((acc, value) => acc + value, 0);
// console.log("Ferqli olan eded >>>", sum2 - sum1);