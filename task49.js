function shoppingCost(buyingList) {
    let totalCost = 0;
    for (const product of buyingList) {
        totalCost = totalCost + product.price*product.quantity;
    }
    return totalCost;
}

const product = [
    { name: "shampoo", price: 300, quantity: 1 },
    { name: "Chiruni", price: 100, quantity: 2 },
    { name: "shirt", price: 700, quantity: 1 },
    { name: "pant", price: 600, quantity: 2 },
    { name: "biscuit", price: 60, quantity: 6 },

]

console.log(shoppingCost(product));