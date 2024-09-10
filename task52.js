const calculateElectronicsBudget = (laptopQ, tabletQ, mobileQ)=>{
    const laptop = 35000; 
    const tablet = 15000;
    const mobile = 20000;
    const laptopPrice = laptop*laptopQ;
    const tabletPrice = tablet*tabletQ;
    const mobilePrice = mobile*mobileQ;
    const totalPrice = laptopPrice+tabletPrice+mobilePrice;
    return totalPrice;
}

const needed =  calculateElectronicsBudget(2,2,5);
console.log(needed);