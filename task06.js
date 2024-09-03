
const ticketPrice = (age, isStudent)=>{
    const ticket = 800;
    let fare;

    if(age<=10){
        fare = 0;
    }else if(isStudent === true){
        fare = ticket/2;
    }
    else if(age >= 60){
        fare = ticket * 0.85;
    }
    else{
        fare = ticket;
    }
    return fare;
} 

var price = ticketPrice(20, true);

console.log(price);