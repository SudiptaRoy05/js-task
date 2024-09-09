const shopping = (shirtQ, pantQ, shoes)=>{
    const shirt = 500;
    const pant = 300;
    const shoe = 900;
    const totalShirtPrice = shirt*shirtQ;
    const totalPantPrice = pant*pantQ;
    const totalShoePrice = shoe*shoes;

    const totalPrice = totalShirtPrice+totalPantPrice+totalShoePrice;
    return totalPrice;
}

console.log(shopping(2,1,1));