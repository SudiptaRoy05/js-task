// const products = [
//     {
//         name:'phone',price:12000,
//     },
//     {
//         name:'laptop',price:112000,
//     },
//     {
//         name:'phone',price:12000,
//     },


// ]

const products = {
    "0": 12,
    "1": 32,
    "2": 65
}


function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments); //array like object
}

add(12,13,5,8,9,6,7)