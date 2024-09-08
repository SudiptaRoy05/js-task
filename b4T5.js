const monthlySavings=(arr, expence)=>{
    if(!Array.isArray(arr)){
        return "Invalid input";
    }
    let total =0;
    for (const value of arr) {
        if(value >= 3000){
           let percent = value - (20/100)*value
           total += percent;
        }
        else{
            total += value;
        }
    } 
    savings = total - expence;
    if(savings <= 0){
        return "Earn More";
    }
    return savings
} 



const income = [1000, 2000, 2500];
const cost = 5000;

console.log(monthlySavings(income,cost));