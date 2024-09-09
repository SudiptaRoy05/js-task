function shoppingCost(buyingList){
    let totalCost = 0;
    for (const product of buyingList) {
        totalCost += product.price;
    }
    return totalCost;
}

const product = [
    {name: "shampoo", price: 300},
    {name: "Chiruni", price: 100},
    {name: "shirt", price: 700},
    {name: "pant", price: 600},
    {name: "biscuit", price: 60},

]

console.log(shoppingCost(product));