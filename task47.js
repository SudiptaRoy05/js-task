function getCheapestPhone(phone){
    let cheapPrice = phone[0];
    // console.log(cheapPrice)
    for (const prices of phone) {
        if(prices.price < cheapPrice.price){
            cheapPrice = prices.price
        }
    }
    return cheapPrice;
}




const mobile = [
    {name: "Samsung", price:78000, camera:"200mp", color:"black"},
    {name: "Xiaomi", price:18000, camera:"50mp", color:"black"},
    {name: "Honor", price:34000, camera:"50mp", color:"gray"},
    {name: "Iqoo", price:42000, camera:"50mp", color:"black"},
    {name: "iPUN", price:108000, camera:"48mp", color:"yollow"},
]


console.log(getCheapestPhone(mobile));