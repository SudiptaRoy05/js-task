
function avgPrice(obj){
    let totalPrice = 0;
    for (const phone of obj) {
        totalPrice += phone.price;
    }

    const avg = totalPrice / obj.length;
    return parseFloat(avg.toFixed(2));

}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log(avgPrice(phones));


// another way 

function findAveragePhonePrice(phoneArray) {
    
    const totalSum = phoneArray.reduce((sum, phone) => sum + phone.price,0);
    const averagePrice = totalSum / phoneArray.length;

    return averagePrice;
}

// Test the function
console.log(findAveragePhonePrice(phones));