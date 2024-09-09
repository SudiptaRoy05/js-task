function phonePrice(arr){
    let cheapestPrice = arr[0];
    for (const price of arr) {
        if(price < cheapestPrice){
            cheapestPrice = price;
        }
    }
    return cheapestPrice;
}

const phone = [12000,32000,100000,67000,43000,78000];

console.log(phonePrice(phone));