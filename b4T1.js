function calculateMoney(ticketQuantity){
    const ticketPrice = 120;
    const gardPerDay = 500;
    const staf = 8;
    const lunch = 50;
    const total = (ticketPrice*ticketQuantity)-(gardPerDay+(staf*lunch));
    return total;
}

console.log(calculateMoney(190));