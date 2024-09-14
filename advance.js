// const numbers = [45, 65, 76, 35, 86, 64];

// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     console.log(num);
// }

// console.log("============================")


// for (const number of numbers) {
//     console.log(number);
// }

const products = [
    { id: 1, name: 'walton phoNe', price: 12344 },
    { id: 2, name: 'samsung pHone', price: 119344 },
    { id: 3, name: 'I Phone', price: 112344 },
    { id: 4, name: 'xiaomi phone', price: 15344 },
    { id: 5, name: 'vivo Phone', price: 32344 },
    { id: 6, name: 'iQoo phone', price: 42344 },
    { id: 1, name: 'walton Laptop', price: 92344 },
    { id: 2, name: 'samsung Tab', price: 119344 },
    { id: 3, name: 'I pad', price: 112344 },
    { id: 4, name: 'Lenovo laptop', price: 15344 },
    { id: 5, name: 'dell Laprop', price: 32344 },
    { id: 6, name: 'macbook laptop', price: 42344 },
];

// for (const product of products) {
//     console.log(product)
//     for (const key in product) {
//        console.log(product[key]);
//     }
// }

function matchProduct(products,search){
    const matched =[];
    for (const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchProduct(products, 'laptop');
console.log(result)